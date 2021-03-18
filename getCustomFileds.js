const jiraAPI = require("./jiraapi");
const fs = require("fs");

async function main() {
  const res = await jiraAPI("field");
  const teamYellow = res
    .filter((r) => r.scope?.project.id == "12010")
    .map((item) => {
      return { id: item.id, title: item.name };
    });
  const teamBlue = res
    .filter((r) => r.scope?.project.id == "12014")
    .map((item) => {
      return { id: item.id, title: item.name };
    });
  fs.writeFileSync("./teamData/teamYellow.json", JSON.stringify(teamYellow));
  fs.writeFileSync("./teamData/teamBlue.json", JSON.stringify(teamBlue));
}

main();
