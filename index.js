const express = require("express");
const app = express();
const RouteplannerExperiment = require("./RouteplannerExperiment.js");

app.get("/", (req, res) => {
  const experiment = new RouteplannerExperiment({ id: 1 });
  const result = experiment.get("service");
  res.send(result);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
