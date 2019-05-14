const express = require("express");
const app = express();
const RouteplannerExperiment = require("./RouteplannerExperiment.js");

app.get("/", (req, res) => {
  const unit = req.query['unit'];
  const experiment = new RouteplannerExperiment({ id: unit });
  const result = experiment.get("service");
  res.send(result);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("Listening at http://%s:%s", host, port);
});
