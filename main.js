// $(document).ready(function() {

// var city =[];

// $("#weatherSearch").on("click", function(event) {
//   var cityWeather = $("#citySearch").val();

//   $.ajax({
//      type: "GET",
//       url: 'https://cors-anywhere.herokuapp.com/' + "http://api.openweathermap.org/data/2.5/weather?q=" + cityWeather + "&appid=8a03f969205ca8695bf44e2bd8b84126",
//    }).done(function(result){
//     console.log(result);

//     var weatherP = $( "#weatherInfo" )
//     weatherP.text("temp:" + result.main.temp );
    
//     var cloudsP = $( "#weatherInfo2" )
//     cloudsP.text("clouds:" + result.weather[0].description);

//     var windP = $( "#weatherInfo3" )
//     windP.text("Wind Speed:" + result.wind.speed);

//    });
//   });

  
// });

