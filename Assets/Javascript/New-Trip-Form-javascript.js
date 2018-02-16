/**
 * Makes API call to Google autocomplete api for a given destination, and then renders those predictions on the page. Sets Destination input value to prediction on click.
 */
var autoFill = function () {
    var locInput = $("#tripLocation");
    locInput.val();
    var apiKey = "AIzaSyD4uplfsc5qPH6Z92HT9JSStvydTmRTyMs";
    var queryURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?key=" + apiKey + "&input=" + locInput.val() + "&type=geocode";
    var predictionsView = $("#predictionsView");
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/' + queryURL,
        method: "GET",
    }).done(function (response) {
        predictionsView.empty();
        console.log(response);
        if (response.status === "ZERO_RESULTS") {
            $("#predictionsView").append("<p> Zero Results </p>");

        }

        var renderPredictions = function () {
            var predictionArr = [];

            for (var i = 0; i < response.predictions.length; i++) {
                var newPredict = $("<p>")
                var predictions = [];
                predictions = response.predictions[i].description;

                var city=predictions.split(",");
                var city=city.slice(-3, city.length);
                city =city.join(",")


                newPredict.text(city);
                newPredict.addClass("prediction");
                predictionsView.append(newPredict);
            }
            $(".prediction").click(autofillClick);
            function autofillClick() {
                locInput.val(this.innerText);
                predictionsView.hide();
                $("#tripName").val(this.innerText)
            }
            $(".prediction").hover(hoverOn, hoverOff);
            function hoverOn() {
                $(this).addClass("autofillHover");
            }
            function hoverOff() {
                $(this).removeClass("autofillHover");
            }
        }
        if (locInput.val() !== "") {
            predictionsView.show();
            renderPredictions();
        }
        else { predictionsView.hide() }
    })
}

/**
 * Adds creates new trip object and pushes that object to Trips Array in local storage
 * @param {string} event 
 */
function addTrip(event) {
    event.preventDefault();
    var tripsArray = [];
    if (localStorage.getItem("Trips Array")) {
        tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    }

    $.ajax({
        type: "GET",
        url: 'https://cors-anywhere.herokuapp.com/' + "https://api.openweathermap.org/data/2.5/weather?q=" + $("#tripLocation").val() + "&appid=8a03f969205ca8695bf44e2bd8b84126",
    }).done(function (result) {
        var temp = Math.floor(result.main.temp * 9 / 5 - 459.67);
        var trip = {
            tripName: $("#tripName").val(),
            destination: $("#tripLocation").val(),
            startDate: $("#start-date").val(),
            endDate: $("#end-date").val(),
            weather: temp,
            packingList: {
                Default: [],
                Medicine: [],
                Documents:[],
                Clothes: [],
                Electronics: [],
                Shoes:[],
                Outdoor:[],
                Toiletries: [],
            }
        }

        tripsArray.push(trip);
        localStorage.setItem("Trips Array", JSON.stringify(tripsArray));
        localStorage.setItem("SetTrip", JSON.stringify(trip));
        window.location.href = "Pack-List.html";

    });

    tripsArray.push(trip);
    console.log(tripsArray);
    localStorage.setItem("Trips Array", JSON.stringify(tripsArray));
    localStorage.setItem("SetTrip", JSON.stringify(trip));

    window.location.href = "Pack-List.html";

});
}

$("#tripLocation").keyup(autoFill);
$("#create-trip-btn").click(addTrip);











