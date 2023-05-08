var APIKey = "8f6a6be8bb88fb44218d30f9482436c4";







function getLatLon(name) {

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=imperial&appid=" + APIKey;
  
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        getWeatherData(lat, lon);
      });
  }

  function getWeatherData(lat, lon) {

    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
  
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var days = [];
        for (var i = 0; i < data.list.length; i++) {
  
          if (data.list[i].dt_txt.slice(11, 13) == "12") {
            days.push(data.list[i]);
          }
        }
        console.log(days);
      });
  }