const planout = require("planout");

class RouteplannerExperiment extends planout.Experiment {
  setup() {
    this.name = "RouteplannerExperiment";
  }

  assign(params, args) {
    params.set(
      "service",
      new planout.Ops.Random.WeightedChoice({
        choices: ["routeplanner", "google"],
        weights: [0.25, 0.75],
        unit: args.id
      })
    );
  }

  configureLogger() {
    return;
  }

  log(stuff) {
    console.log(stuff);
  }
  getParamNames() {
    return this.getDefaultParamNames();
  }
  previouslyLogged() {
    return this._exposureLogged;
  }
};

module.exports = RouteplannerExperiment;