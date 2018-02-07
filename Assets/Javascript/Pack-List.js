// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var parsed = [{packingList: {Default:[]}}];
    if(localStorage.getItem("SetTrip")){
        parsed = JSON.parse(localStorage.getItem("SetTrip"));
    }
    var SetTrip = parsed
    for (var i = 0; i < SetTrip.length; i++) {
        var items = SetTrip[i].packingList.Default;
        console.log("hi")

        var items = SetTrip[i].packingList.Default;
        renderTripItems();
        function renderTripItems() {
            console.log(items)
        }
    }

    for (var i = 0; i < SetTrip.length; i++) {
        console.log(SetTrip[i]);
        var newItemRow = $("<div class=row>");
        newItemRow.text(items[i]);
        var checkBox = '<input type="checkbox" aria-label="...">'
        newItemRow.prepend(checkBox);
        $("#item-view").append(newItemRow);
        // items.push(items);
        console.log(tripsArray[i]);
        // localStorage.setItem("Trips Array", JSON.stringify(tripsArray));
    }

    // console.log(SetTrip, "this is the trip we got from local stroage");
    // // $("#trip-name").text(tripName);

}
renderPackList();

// -----------------------------------
// SET CATEGORY DROPDOWN
function setCateg() {
    var selectedCatBtn = $("#categ-dropdown-btn");
    var setCategTo = $(this).text() + " ";
    selectedCatBtn.text(setCategTo);
    var spanCaret = $("<span> ").addClass("caret");
    selectedCatBtn.append(spanCaret);
}
$(".set-category-btn").click(setCateg);

// -----------------------------------
// ADD ITEM TO PACKLIST
function addItem(event) {
    event.preventDefault();
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    var cats = Object.keys(SetTrip.packingList);
    var selectedCat = $("#categ-dropdown-btn").text().trim()
    // console.log(SetTrip);
    var showInCateg = function (key) {
        category = key;
        console.log(categArray);

// renderPackList();
// $("#add-item").click(addItem);
// console.log(trip);

        itemView = $("." + category);
        var newItem = $("#item-input").val().trim();
        if (newItem) {
            var newItemRow = $("<div class=row>");
            newItemRow.text(newItem);
            var checkBox = '<input type="checkbox" aria-label="...">'
            newItemRow.prepend(checkBox);
            itemView.append(newItemRow);
            categArray.push(newItem);
        }
    }

    function renderCatPanels(categg) {
        var newPanel = $("#panels-view").html()
        $("#panels-view").empty();
        $("#panels-view").append(newPanel);
    }

    for (var i = 0; i < cats.length; i++) {
        var categArray =Object.entries(SetTrip.packingList)[i];

        var cat = cats[i];
        // showInCateg(cats[i]);
        renderCatPanels(cats[i]);
        if (cats[i] == selectedCat) {
            showInCateg(cats[i]);
            console.log(categArray);
            console.log(Object.entries(categArray));  
        }
    }

    // SetTrip[i].packingList.Default.push(item);
    // console.log(SetTrip[i].packingList);
    localStorage.setItem("SetTrip", JSON.stringify(SetTrip));
}
$("#add-item").click(addItem);
