var trip;
function renderTrips(){
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    console.log(tripsArray);
    if(!tripsArray){
        tripsArray = [];
    }

    for (var i=0; i<tripsArray.length; i++){
        console.log(tripsArray[i].tripName);
        var myTrips=$("#added-trip-list");
        var newTripRow = "<p class='added-trip-name' id='trip-row-" +i +"'>"
        $(myTrips).append(newTripRow);
        // var newTripCol = "<div class='col-xs-12 added-trip-name ' id='trip-col-" +i +"'>"
        // $("#trip-row-"+i).append(newTripCol);
        $("#trip-row-"+i).text(tripsArray[i].tripName)
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

}
renderTrips();