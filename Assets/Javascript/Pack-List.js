// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var parsed = [{ packingList: { Default: [] } }];
    if (localStorage.getItem("SetTrip")) {
        parsed = JSON.parse(localStorage.getItem("SetTrip"));
        console.log(parsed, "comment")
    }
    var SetTrip = parsed
    var cats = Object.keys(SetTrip.packingList);
    console.log(cats)
    for (var i = 0; i < cats.length; i++) {
        var items = SetTrip.packingList[cats[i]];
        if (items.length !== 0) {
            renderCatPanels(cats[i]);
        }
        for (var i2 = 0; i2 < items.length; i2++) {
            showInCateg(cats[i], items[i2]);
        }
    }
    for (var cat in SetTrip.packingList){
        newListItem = "<li>"
        newLink = "<a href='#'>"
        newLink = $(newLink).text(cat);
        linkClass = "set-category-btn"
        newLink = $(newLink).addClass(linkClass);
        newListItem = $(newListItem).append(newLink);
        $(newListItem).insertBefore("li.divider");
    }

    var formattedStartDate = moment(SetTrip.startDate, "YYYY-MM-DD").format("ll");
    var formattedEndDate = moment(SetTrip.endDate, "YYYY-MM-DD").format("ll");

    $("#trip-name").text(SetTrip.tripName);
    $("#destination").text(SetTrip.destination);
    $("#date").text(formattedStartDate + " - " + formattedEndDate);
    $("#weatherInfo").text("It is currently " + SetTrip.weather + "\xB0 F" + " in " + SetTrip.destination + ".");

}


renderPackList();
function renderCatPanels(categg) {
    var newPanel = $("<div class='panel panel-default categ-panel'>")
    panelClass = "categ-" + categg
    newPanel.addClass(panelClass);

    var newPanelHTML = $("#panelHTML").html();
    // $("#panels-view").empty();
    newPanel.html(newPanelHTML);
    $("#panels-view").append(newPanel);
    $("." + panelClass + " > >h3.panel-title").text(categg);
    // $("."+panelClass+" >panel-body >").text(categg);
    $("." + panelClass + " >div.panel-body >").addClass(categg);

}
// -----------------------------------
// SET CATEGORY DROPDOWN
function setCateg() {
    var selectedCatBtn = $("#categ-dropdown-btn");
    var setCategTo = $(this).text() + " ";
    console.log(this);
    selectedCatBtn.text(setCategTo);
    var spanCaret = $("<span> ").addClass("caret");
    selectedCatBtn.append(spanCaret);
}
$(".set-category-btn").click(setCateg);

// -----------------------------------
function showInCateg(category, newItem) {

    itemView = $("." + category);
    if (newItem) {
        var itemId = newItem.split(" ").join(",");
        var newItemRow = $(`<div id=${itemId} class='row' >`);
        newItemRow.text(newItem);
        var checkBox = '<input type="checkbox" aria-label="..."> '
        newItemRow.prepend(checkBox);
        itemView.append(newItemRow);
        newItemRow.append(`<button class= "removeItem" data-category=${category} data-item=${newItem}>Remove</button>`)
    }

}
// ADD ITEM TO PACKLIST
function addItem(event) {
    event.preventDefault();
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    var cats = Object.keys(SetTrip.packingList);
    // console.log(cats);
    var selectedCat = $("#categ-dropdown-btn").text().trim()
    var newItem = $("#item-input").val().trim();
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        var categArray = SetTrip.packingList[cat]
        var newItem = $("#item-input").val().trim();
        var items = SetTrip.packingList[cats[i]];
        if (cat == selectedCat) {
            if (newItem) {
                if (items.length == 0) {
                    renderCatPanels(cats[i]);
                }
                showInCateg(cats[i], newItem);
                categArray.push(newItem);
                SetTrip.packingList[cats[i]] = categArray
            }
        }
    }
    localStorage.setItem("SetTrip", JSON.stringify(SetTrip))
    var tripArray = JSON.parse(localStorage.getItem("Trips Array"));
    for (var i = 0; i < tripArray.length; i++) {
        if (tripArray[i].tripName === SetTrip.tripName) {
            tripArray[i] = SetTrip
        }
    }
    localStorage.setItem("Trips Array", JSON.stringify(tripArray));
    $("#item-input").val("");


}
$("#add-item").click(addItem);

$(document).on("click", ".removeItem", function () {
    var category = $(this).attr("data-category");
    console.log(this);
    console.log(category)
    var item = $(this).attr("data-item");
    var idToRemove = item.split(" ").join(",");
    console.log(item);
    var trip = JSON.parse(localStorage.getItem("SetTrip"));
    console.log(trip, "this is the thing")
    var categoryArray = trip.packingList[category]
    var updatedArray = categoryArray.filter(catItem => catItem != item);
    trip.packingList[category] = updatedArray
    if (categoryArray = []) {
        console.log("hi i'm empty", category)
    }
    localStorage.setItem("SetTrip", JSON.stringify(trip));
    $(`#` + idToRemove).remove();

});


// function clickCustom(event) {
//     event.preventDefault();
//     console.log("add custom");
// }
// $(".custom-categ-btn").click(clickCustom);

function addCateg() {


    event.preventDefault();
    newCateg = $("#custom-categ-input").val();
    if (newCateg != "") {
        console.log(newCateg);
        var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
        SetTrip.packingList[newCateg] = [];
        console.log(SetTrip)
        newListItem = "<li>"
        newLink = "<a href='#'>"
        newLink = $(newLink).text(newCateg);
        linkClass = "set-category-btn"
        newLink = $(newLink).addClass(linkClass);
        newListItem = $(newListItem).append(newLink);
        console.log(newListItem)
        $(newListItem).insertBefore("li.divider");

        $("#myModal").modal("hide");    
        var selectedCatBtn = $("#categ-dropdown-btn");
        selectedCatBtn.text(newCateg+ " ");
        var spanCaret = $("<span> ").addClass("caret");
        selectedCatBtn.append(spanCaret)

        localStorage.setItem("SetTrip", JSON.stringify(SetTrip));
        var tripArray = JSON.parse(localStorage.getItem("Trips Array"));
        for(var i = 0; i <tripArray.length; i++){
            if (tripArray[i].tripName === SetTrip.tripName){
                tripArray[i] =SetTrip;
            }
        }
        localStorage.setItem("Trips Array", JSON.stringify(tripArray));
    }


}
$("#add-categ-btn").click(addCateg);
$(".set-category-btn").click(setCateg);

function renderDropList(Categ){
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    for (var i = 0; i < SetTrip.packingList.length; i++){
        console.log(SetTrip.packingList[i])
    }

}

// function closeCustomCat() {
//     $("#myModal").modal("hide");
// }
// $("#add-categ-btn").click(closeCustomCat);