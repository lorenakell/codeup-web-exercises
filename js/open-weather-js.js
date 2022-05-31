$(document).ready(function () {
  "use strict";

  let startingLat = 29.4269;
  let startingLng = -98.4896;

  getCityName(startingLat, startingLng);

  runPage(startingLat, startingLng);

  function createMap(latitude, longitude) {
    mapboxgl.accessToken = MAPBOX_API_KEY;
    let mapOptions = {
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 7,
    };

    return new mapboxgl.Map(mapOptions);
  }

  function createMarker(latitude, longitude, map) {
    let markerOptions = {
      draggable: true,
    };
    return new mapboxgl.Marker(markerOptions)
      .setLngLat([longitude, latitude])
      .addTo(map);
  }

  function createGeocoder() {
    return new MapboxGeocoder({
      accessToken: MAPBOX_API_KEY,
      mapboxgl: mapboxgl,
      marker: false,
    });

    function monitorGeocoder(geocoder, marker) {
      geocoder.on("result", function (e) {
        let geoLat = e.result.geometry.coordinates[1];
        let geoLng = e.result.geometry.coordinates[0];
        let city = e.result.place_name;

        updatePage(geoLat, geoLng, city, marker);
      });
    }

    function updatePage(latitude, longitude, city, marker) {
      getWeather(latitude, longitude);
      $("#current-city").html(city);
      marker.setLngLat([longitude, latitude]);
    }

    function getCityName(lat, lng) {
      reverseGeocode({ lat: lat, lng: lng }, MAPBOX_API_KEY).then(function (
        result
      ) {
        $("#current-city").html(result);
      });
    }

    function loopThroughWeeklyForecast(data) {
      let html = "";

      for (let i = 0; i < 5; i++) {
        html += '<div class="col-12 col-lg-2" id="weather-card">';
        html += createWeatherCard(data[i]);
        html += "</div>";
      }

      return html;
    }

    function convertTimestampToDate(timestamp) {
      let theDate = newDate(timestamp * 1000);
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return theDate.toLocaleDateString("en-us", options);
    }

    function extractWeatherData(data) {
      return {
        tempMin: data.temp.min,
        tempMax: data.temp.max,
        humidity: data.humidity,
        pressure: data.pressure,
        wind: data.wind_speed,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        timestamp: data.dt,
      };
    }

    function createWeatherCard(data) {
      let weather = extractWeatherData(data);

      let html = "";
      html += '<div class="card h-100">';
      html += '<div class="card-header text-center">';
      html += "<p>" + convertTimestampToDate(weather.timestamp) + "</p>";
      html += "</div>";
      html += '<div class="card-block">';
      html += '<div class="card-body">';
      html +=
        '<h5 class="card-title text-center">' +
        weather.tempMin +
        "&#8457 / " +
        weather.tempMax +
        "&#8457</h5>";
      html +=
        '<img class="mx-auto d-block" src="http://openweathermap.org/img/w/' +
        weather.icon +
        '.png" alt="">';
      html +=
        '<p class="card-text"><span class="font-weight-bold">Description: </span>' +
        weather.description +
        "</p>";
      html +=
        '<p class="card-text"><span class="font-weight-bold">Humidity: </span>' +
        weather.humidity +
        "</p>";
      html +=
        '<p class="card-text"><span class="font-weight-bold">Wind: </span>' +
        weather.wind +
        "</p>";
      html +=
        '<p class="card-text"><span class="font-weight-bold">Pressure: </span>' +
        weather.pressure +
        "</p>";
      html += "</div>";
      html += "</div>";
      html += "</div>";

      return html;
    }

    function getWeather(latitude, longitude) {
      $.get("https://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat: latitude,
        lon: longitude,
        units: "imperial",
        exclude: "minutely,hourly,alerts",
      }).done(function (data) {
        $("#weather-row").html(loopThroughWeeklyForecast(data.daily));
      });
    }

    function runPage(latitude, longitude) {
      getWeather(latitude, longitude);

      let map = createMap(latitude, longitude);

      let marker = createMarker(latitude, longitude, map);

      let geocoder = createGeocoder();
      map.addControl(geocoder);

      monitorGeocoder(geocoder, marker);

      function onDragEnd() {
        let lngLat = marker.getLngLat();
        let newLng = lngLat.lng;
        let newLat = lngLat.lat;

        let city = getCityName(newLat, newLng);
        updatePage(newlat, newLng, city, marker);
      }

      marker.on("dragend", onDragEnd);
    }
  }
});
