function renderTrips(){
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    console.log(tripsArray);
    if(!tripsArray){
        tripsArray = [];
    }

    for (var i=0; i<tripsArray.length; i++){
        console.log(tripsArray[i].tripName);
        var myTrips=$("#trip-list");
        var newTripRow = "<div class='row' id='trip-row-" +i +"'>"
        $(myTrips).append(newTripRow);
        var newTripCol = "<div class='col-xs-12 tripcol' id='trip-col-" +i +"'>"
        $("#trip-row-"+i).append(newTripCol);
        $("#trip-col-"+i).text(tripsArray[i].tripName)
    }


    function clickTrip(){
        console.log(this);
        window.location.href = "Pack-List.html";

    }
    
    $(".tripcol").click(clickTrip);
}


renderTrips();