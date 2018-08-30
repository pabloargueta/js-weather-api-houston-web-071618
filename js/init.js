document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  const API_KEY = "54750043e7dedd710de09d777236c338";
  const CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  const URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + API_KEY + "/40.7127,-74.0059?exclude=currently,minutely,daily";

  // make your fetch in the makeRequest function in weatherChart.js
  makeRequest(URL, ctx)

  //add a form to make map location dynamic

});
//
// ((result.hourly.data[0].time)*1000);
//
// result.hourly.data.map do |obj|
//   obj.time*100
// end

// const hours = result.hourly.data.map (x => x * 1000);
