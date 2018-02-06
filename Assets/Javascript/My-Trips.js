var trip;
function renderTrips(){
    var parse = []
    if(localStorage.getItem("Trips Array")){
        parse = JSON.parse(localStorage.getItem("Trips Array"))
    }
    var tripsArray = parse
    console.log(tripsArray);
    if(!tripsArray){
        tripsArray = [];
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
        

    function clickTrip(){
        console.log(this);
         trip=this.tripName;
        window.location.href = "Pack-List.html";
        return trip;
    }
    
    $(".added-trip-name").click(clickTrip);
}


$(document).on("click", ".removeTrip", function(){
    var tripName =  $(this).attr("data-name")
    var tripWithoutDashes = tripName.split("-").join(" ");
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    var updatedArray = tripsArray.filter( trip => trip.tripName != tripWithoutDashes);

    localStorage.setItem("Trips Array", updatedArray);


    $(`.` + tripName).remove();

});

renderTrips();