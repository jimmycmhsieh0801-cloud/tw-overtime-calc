const assert = require("assert");
const { calcOvertime } = require("./app.js");
const r = calcOvertime(30000, 3, "weekday");
assert.strictEqual(r.hourly, 125);
assert.strictEqual(r.pay, 542);
console.log("OVERTIME_TESTS_PASSED");