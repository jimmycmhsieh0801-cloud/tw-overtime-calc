function calcOvertime(monthlySalary, hours, dayType = "weekday") {
  const s = Math.max(0, Number(monthlySalary) || 0);
  const h = Math.max(0, Number(hours) || 0);
  const hourly = s / 240;
  let pay = 0;
  if (dayType === "weekday") {
    const capped = Math.min(4, h);
    const tier1 = Math.min(2, capped);
    const tier2 = Math.max(0, capped - 2);
    pay = hourly * ((4 / 3) * tier1 + (5 / 3) * tier2);
  } else {
    const capped = Math.min(12, h);
    const tier1 = Math.min(2, capped);
    const tier2 = Math.max(0, Math.min(8, capped) - 2);
    const tier3 = Math.max(0, capped - 8);
    pay = hourly * ((4 / 3) * tier1 + (5 / 3) * tier2 + (8 / 3) * tier3);
  }
  return { hourly: Math.round(hourly * 10) / 10, pay: Math.round(pay) };
}
if (typeof document !== "undefined") {
  const ids = ["salaryInput", "dayType", "otHours"];
  function render() {
    const [s, dt, h] = ids.map(id => document.getElementById(id).value);
    const res = calcOvertime(s, h, dt);
    document.getElementById("hourlyWageEl").textContent = `NT$ ${res.hourly} / hr`;
    document.getElementById("otPayEl").textContent = `NT$ ${res.pay.toLocaleString()}`;
  }
  ids.forEach(id => document.getElementById(id).addEventListener("input", render));
  render();
}
if (typeof module !== "undefined" && module.exports) module.exports = { calcOvertime };