function renderTrips(){
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    console.log(tripsArray);
}

renderTrips();