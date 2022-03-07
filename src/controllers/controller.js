const axios = require("axios")


const Weather = require("../model/Weather")

exports.renderHomePage = (req, res) => {
  res.render("index")
}

exports.getWeather = (req, res) => {
  const city = req.body.city
  const url = `http://api.weatherapi.com/v1/forecast.json?key=436fc116c9af45f7b40123021222702&q=${place}&days=1&aqi=no&alerts=no`

  const weather = new Weather(req.body.city)
  weather.validateUserInput()

  if (weather.errors.length) {
    res.render("index", {
      error: weather.errors.toString()
    })
  } else {
    axios.get(url).then((response) => {
      const { temp: temperature } = response.data.main
      const { name: location } = response.data
      res.render("index", {
        weather: `It is currently ${temperature} in ${location}.`
      })
    }).catch((error) => {
      console.log(error)
    })
  }
}


