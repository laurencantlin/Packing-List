var trip;
var tripsArray = [];
function renderTrips(){
    var parse = undefined;
    if(localStorage.getItem("Trips Array")){
        parse = JSON.parse(localStorage.getItem("Trips Array"))
    }

    if(parse){
        tripsArray = parse
    }

    for (var i=0; i<tripsArray.length; i++){
        console.log(tripsArray[i].tripName);
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
$(document).on("click", ".added-trip-name", clickTrip);

$(document).on("click", ".removeTrip", function(){
    var tripName =  $(this).attr("data-name")
    var tripWithoutDashes = tripName.split("-").join(" ");
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    var updatedArray = tripsArray.filter( trip => trip.tripName != tripWithoutDashes);

    localStorage.setItem("Trips Array", JSON.stringify(updatedArray));


    $(`.` + tripName).remove();

});


renderTrips();