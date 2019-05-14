const http = require("http");
const fetch = require("node-fetch");

const executeRequest = async unit => {
  const url = "http://localhost:3000?unit=" + unit;
  const response = await fetch(url);
  const result = await response.text();
  console.log(`${url} -> ${result}`)
  return result;
};

(async () => {
  while (true) {
    try {
      const unit = new Date().getTime();
      await executeRequest(unit)
    } catch {
      //ignore
    }
  }
})();

