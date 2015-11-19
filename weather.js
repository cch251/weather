$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "Currently, the temperature is " + data.currently.temperature + "°F.  Tomorrow's temperature will be " + data.daily.data[1].apparentTemperatureMax  + " °F, with a humidty level of " + data.daily.data[1].humidity + ".  The temperature the day after tomorrow will be " + data.daily.data[2].apparentTemperatureMax + " °F, with a humidity level of " + data.daily.data[2].humidity + ".  The day after that will be " + data.daily.data[3].apparentTemperatureMax + " °F, with a humidty level of " + data.daily.data[3].humidity + ".";
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});