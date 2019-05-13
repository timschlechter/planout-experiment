const planout = require("planout");

module.exports = class RouteplannerExperiment extends planout.Experiment {
  setup() {
    this.name = "RouteplannerExperiment";
  }

  assign(params, args) {
    params.set(
      "service",
      new planout.Ops.Random.WeightedChoice({
        choices: ["routeplanner", "google"],
        weights: [0.2, 0.8],
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
