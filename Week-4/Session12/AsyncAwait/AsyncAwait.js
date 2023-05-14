async function getExchangeRate(currencyCode) {
  const url = `https://api.exchangerate.host/latest`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const rate = data.rates[currencyCode];
    if (rate === undefined) {
      return null;
    } else {
      return Number(rate.toFixed(4));
    }
  } catch (error) {
    throw new Error(`Unable to get exchange rate for ${currencyCode}.`);
  }
}
getExchangeRate("USD")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });

getExchangeRate("XYZ")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
