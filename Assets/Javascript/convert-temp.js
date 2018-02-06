$(document).ready(function() {

    var city =[];
    
    $("#weatherSearch").on("click", function(event) {
      var cityWeather = $("#citySearch").val();
    
      $.ajax({
         type: "GET",
          url: 'https://cors-anywhere.herokuapp.com/' + "http://api.openweathermap.org/data/2.5/weather?q=" + cityWeather + "&appid=8a03f969205ca8695bf44e2bd8b84126",
       }).done(function(result){
        console.log(result);
    

    //temp converter
        // var weatherP = $( "#weatherInfo" )
        // weatherP.text(result.main.temp );
        valNum = parseFloat(result.main.temp);
       $("#weatherInfo").text(Math.floor((valNum *9/5) - 459.67));
        
       var cloudsP = $( "#weatherInfo2" )
        cloudsP.text(result.weather[0].description);
       
        
       });

       
      });

     



    });