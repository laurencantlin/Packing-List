var trip;
var tripsArray = [];

/** 
 * Gets trip destinations for all trips in local storage and renders each to the page
*/
function renderTrips(){
    var parse = undefined;
    if(localStorage.getItem("Trips Array")){
        parse = JSON.parse(localStorage.getItem("Trips Array"))
    }
    if(parse){
        tripsArray = parse
    }
    for (var i=0; i<tripsArray.length; i++){
        var myTrips=$("#added-trip-list");
        var dataName = tripsArray[i].tripName.split(" ").join("-");
        var newTripRow = `<div class=${dataName} id='trip-row-` +i +"'></div>";
        var tripText =$("<p>");
        $(myTrips).append(newTripRow);
        $(tripText).text(tripsArray[i].tripName);
        $(tripText).addClass("added-trip-name")
        $("#trip-row-" +i ).append(tripText);
        $("#trip-row-" +i).append(`<button class= "removeTrip" data-name=${dataName}>Remove</button>`);
    }
}        

/**
 * Creates SetTrip object in local storage for the trip selected and navigates to the Pack List page
 */
function clickTrip(){
    var firedTrip = $(this).text().trim();
    for (var i=0; i<tripsArray.length; i++){
        if(tripsArray[i].tripName === firedTrip){
            console.log(firedTrip)
            localStorage.setItem("SetTrip", JSON.stringify(tripsArray[i]));
        }
    window.location.href = "Pack-List.html";
    }
}

/**
 * On clicking the 'remove' button for a given trip, removes selected trip object from the Trips Array in local storage
 */
$(document).on("click", ".removeTrip", function(){
    var tripName =  $(this).attr("data-name")
    var tripWithoutDashes = tripName.split("-").join(" ");
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    var updatedArray = tripsArray.filter( trip => trip.tripName != tripWithoutDashes);
    localStorage.setItem("Trips Array", JSON.stringify(updatedArray));
    $(`.` + tripName).remove();
});

renderTrips();
$(document).on("click", ".added-trip-name", clickTrip);
