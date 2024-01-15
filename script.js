const currencyFirst = document.querySelector("#currencyFirst");
const currencySecond = document.querySelector("#currencySecond");
const exchangeRate = document.querySelector(".exchangeRate");
const equal = document.getElementById("equal");
const count = document.getElementById("count");

const updateRate = () => {
  fetch(
    `https://v6.exchangerate-api.com/v6/b97c40eb1bd584fc94cfc3f7/latest/${currencyFirst.value}`
  ).then((res) => res.json()).then((data) => {
    console.log(data)
      const rate = data.conversion_rates[currencySecond.value];

      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;

      equal.textContent = (count.value * rate).toFixed(2);
    });
};

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
count.addEventListener("input", updateRate);
updateRate();