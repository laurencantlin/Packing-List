//AUTOFILL FUNCTION
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
            for (var i = 0; i < response.predictions.length; i++) {
                var newPredict = $("<p>")
                var predictions = [];
                predictions[i] = response.predictions[i].description;
                console.log(predictions[i]);
                newPredict.text(predictions[i]);
                newPredict.addClass("prediction");
                predictionsView.append(newPredict);
            }
            $(".prediction").click(autofillClick);
            function autofillClick() {
                console.log("clickssss");
                locInput.val(this.innerText);
                predictionsView.hide();
            }
            $(".prediction").hover(hoverOn, hoverOff);
            function hoverOn() {
                console.log("hoveron")

                console.log(this)
                $(this).addClass("autofillHover");
            }
            function hoverOff() {
                console.log("hoveroff")
                $(this).removeClass("autofillHover");
            }

            // $(locField).blur(autofillBlur);
            // function autofillBlur(){
            //     console.log("focusout")
            //     predictionsView.hide();

            // }

        }
        // renderPredictions();
        if (locInput.val() !== "") {
            predictionsView.show();
            renderPredictions();
        }
        else { predictionsView.hide() }
    })
}


$("#tripLocation").keyup(autoFill);

// SUBMIT ADD TRIP FORM FUNCTION
function addTrip(event) {
    event.preventDefault();
    var tripsArray = [];
    if (localStorage.getItem("Trips Array")) {
        tripsArray = JSON.parse(localStorage.getItem("Trips Array"));

    }

    $.ajax({
        type: "GET",
        url: 'https://cors-anywhere.herokuapp.com/' + "http://api.openweathermap.org/data/2.5/weather?q=" + $("#tripLocation").val() + "&appid=8a03f969205ca8695bf44e2bd8b84126",
    }).done(function (result) {
        console.log(result);
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
        console.log(tripsArray);
        localStorage.setItem("Trips Array", JSON.stringify(tripsArray));
        localStorage.setItem("SetTrip", JSON.stringify(trip));

        window.location.href = "Pack-List.html";

    });
}


$("#create-trip-btn").click(addTrip);











