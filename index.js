const express = require("express");
const app = express();
const RouteplannerExperiment = require("./RouteplannerExperiment.js");

const status = {};

app.get("/", (req, res) => {
  const unit = req.query["unit"];
  const experiment = new RouteplannerExperiment({ id: unit });
  const result = experiment.get("service");
  res.send(result);

  // update status
  status[result] = status[result] || new Set();
  status[result].add(unit);

  // write status to console
  const total = Object.keys(status).map(key => status[key].size).reduce((prev, curr) => prev + curr);
  const lines = Object.keys(status).map(key => `${key}=${status[key].size} (${(status[key].size/total*100).toFixed(2)}%)`);
  console.log(lines.join(','));  
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
