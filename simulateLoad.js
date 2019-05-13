const http = require("http");
const fetch = require("node-fetch");

const executeRequest = async unit => {
  const res = await fetch("http://localhost:3000?unit=" + unit);
  return res.text();
};

(async () => {
  while (true) {
    const unit = new Date().getTime();
    console.log(`unit=${unit}: ${await executeRequest(unit)}`);
  }
})();
