function createWeatherApp() {
  const temperatureData = {
    NewYork: 20,
    London: 18,
    Paris: 22,
    Tokyo: 25,
    Sydney: 28,
  };

  const cache = {};

  return function getTemperatureForCity(city) {
    if (cache.hasOwnProperty(city)) {
      return cache[city];
    }
    const temperature = temperatureData[city];

    cache[city] = temperature;

    return temperature;
  };
}

const getTemperatureForCity = createWeatherApp();

const temperature1 = getTemperatureForCity("NewYork");
console.log(temperature1);

const temperature2 = getTemperatureForCity("NewYork");
console.log(temperature2);

const temperature3 = getTemperatureForCity("London");
console.log(temperature3);

const temperature4 = getTemperatureForCity("London");
console.log(temperature4);
