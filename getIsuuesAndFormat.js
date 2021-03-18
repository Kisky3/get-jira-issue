const jiraAPI = require("./jiraapi");
const fs = require("fs");
const args = process.argv.slice(2);
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

if (!args) return;
const team = args[0] === "Blue" ? "チームブルー" : "チームイエロー";
const customFileds = JSON.parse(
  fs.readFileSync(`./teamData/team${args[0]}.json`, "utf8")
);

function getCustomFiledValues(customFiledsKey, data) {
  return [...customFiledsKey.map((s) => s.id)].reduce((obj, item) => {
    let value = data[item];
    switch (item) {
      case "customfield_10621":
        value = data[item]?.value;
        break;
      case "customfield_10624":
        // 入力されていないようだったので中途半端な対応
        if (data[item]?.type === "doc") {
          value = data[item].content[0]?.content[0]?.text;
        }
        break;
    }
    return {
      ...obj,
      [item]: value,
    };
  }, {});
}

function encodeSearchParam(issueType, sprint, team) {
  const path = `search?jql=project = ${team}`;
  const issueTypeParams = `issuetype in ${issueType}IssueTypes()`;
  const order = "ORDER BY cf[10605] ASC";
  return encodeURI(`${path} AND ${sprint} AND ${issueTypeParams} ${order}`);
}

const allowFileds = [
  "key",
  "parent",
  "issuetype",
  "summary",
  "labels",
  "project",
  "assignee",
  "status",
  "subtasks",
  "customfield_10610", // ストーリーポイント
  ...customFileds.map((c) => c.id),
];

const csvWriter = createCsvWriter({
  path: `csv/${team}.csv`,
  header: [
    { id: "key", title: "key" },
    { id: "issueType", title: "課題タイプ" },
    { id: "project", title: "プロジェクト" },
    { id: "parentID", title: "親チケID" },
    { id: "title", title: "要約" },
    { id: "assignee", title: "担当者" },
    { id: "status", title: "ステータス" },
    { id: "label", title: "ラベル" },
    { id: "storypoint", title: "ストーリーポイント" },
    ...customFileds,
  ], // 出力する項目(ここにない項目はスキップされる)
});

function formatJsonData(data) {
  return data.map((d) => {
    const customFiledValues = getCustomFiledValues(customFileds, d);
    return {
      key: d.key,
      issueType: d.issuetype.name,
      project:
        d.issuetype.name === "サブタスク"
          ? d.parentProject
          : d.parent.fields.summary,
      parentID:
        d.parent.fields.issuetype.name === "エピック" ? d.key : d.parent.key,
      title: d.summary,
      assignee: d.assignee?.displayName,
      status: d.status.name,
      label: [...d.labels],
      storypoint: d.customfield_10610, // ストーリーポイント
      ...customFiledValues,
    };
  });
}

async function main() {
  const subTasksIds = [];

  const fields = await jiraAPI(
    encodeSearchParam("standard", "sprint in openSprints()", team)
  );
  console.log("getParentIsuues");
  const parentArray = fields.issues.map((field) => {
    const res = {};
    res.key = field.key;
    for (const [key, value] of Object.entries(field.fields)) {
      if (allowFileds.includes(key)) res[key] = value;
    }
    subTasksIds.push(field.key);
    return res;
  });
  console.log("madeParentArray");

  const subtasks = await jiraAPI(
    encodeSearchParam("subtask", `parent in (${subTasksIds})`, team)
  );
  console.log("getSubtaskIssues");
  const subtasksArray = subtasks.issues.map((field) => {
    const res = {};
    res.key = field.key;
    for (const [key, value] of Object.entries(field.fields)) {
      if (key === "parent") {
        res.parentProject = parentArray.filter(
          (p) => p.key === field.fields.parent.key
        )[0].parent.fields.summary;
      }
      if (allowFileds.includes(key)) res[key] = value;
    }
    return res;
  });
  console.log("madeSubtasksArray");

  const parentFormatted = formatJsonData(parentArray);
  const subtaskFormatted = formatJsonData(subtasksArray);

  const combinedData = [...parentFormatted, ...subtaskFormatted];
  csvWriter.writeRecords(combinedData).then(() => {
    console.log("csv created!");
  });
}

main();
