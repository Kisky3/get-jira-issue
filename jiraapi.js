const fetch = require("node-fetch");
require("dotenv").config();

const jiraAPI = (path) => {
  const APIURL = "https://marketenterprise.atlassian.net/rest/api/3/";

  const mail = process.env.EMAIL;
  const pass = process.env.APIKEY;

  return fetch(APIURL + path, {
    method: "GET",
    headers: {
      Authorization: `Basic ${Buffer.from(`${mail}:${pass}`).toString(
        "base64"
      )}`,
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
module.exports = jiraAPI;
