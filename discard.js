$(document).ready(function(){
    $("#newButton").click(function() {
        var createdTrip = $("#trip").val();
        var addButton= $('<input type="button" value="Remove"/>');
        // $("#newTrip").append(addButton);
        // $("<p>").text(createdTrip);
        var newP = $("<p>").html(createdTrip + ('<input type="button" value="Remove"/>'));
        $("#newTrip").append(newP)
 }); 
});