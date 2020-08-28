const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=c4bb67c5ddf9dea6682e9dad19d73837&query=" +
    latitude +
    " ," +
    longitude +
    "&unites=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weather App!", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature}. It feels like ${body.current.feelslike}. The humidity is ${body.current.humidity}.`
      );
    }
  });
};

module.exports = forecast;
