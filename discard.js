$(document).ready(function(){
    $("#newButton").click(function() {
        //var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
        //var updatedArray = tripsArray.filter(trip => trip.Name != "ariable for the trip name goes here")
        var createdTrip = $("#trip").val();
        var addButton= $('<input type="button" value="Remove"/>');
        var newP = $("<p>").html(createdTrip + ('<input type="button" value="Remove"/>')).addclass(createdTrip);
        $("#newTrip").append(newP);
        $("button").click(function(){
            
        });
 }); 
});