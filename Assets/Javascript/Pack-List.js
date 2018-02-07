// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var parsed = [{ packingList: { Default: [] } }];
    if (localStorage.getItem("SetTrip")) {
        parsed = JSON.parse(localStorage.getItem("SetTrip"));
    }
    var SetTrip = parsed
    var cats = Object.keys(SetTrip.packingList);
    console.log(SetTrip)

    for (var i = 0; i < cats.length; i++) {
        var items = SetTrip.packingList[cats[i]];
        console.log(cats[i],items[0]);
        for (var i2 = 0; i2 < items.length; i2++) {
            showInCateg(cats[i], items[i2]);
        }
    }
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
function showInCateg(category, newItem) {
    // var newItem = $("#item-input").val().trim();

    // category = key;
    // console.log(categArray);
    itemView = $("." + category);
    if (newItem) {
        var newItemRow = $("<div class=row>");
        newItemRow.text(newItem);
        var checkBox = '<input type="checkbox" aria-label="..."> '
        newItemRow.prepend(checkBox);
        itemView.append(newItemRow);
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

    function renderCatPanels(categg) {
        var newPanel = $("#panels-view").html()
        $("#panels-view").empty();
        $("#panels-view").append(newPanel);
    }

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        var categArray = SetTrip.packingList[cats[i]]
        var newItem = $("#item-input").val().trim();

        if (cats[i] == selectedCat) {

            showInCateg(cats[i], newItem);
            console.log(cats[i]);
            if (newItem) {
                categArray.push(newItem);
                SetTrip.packingList[cats[i]] = categArray
                console.log(SetTrip.packingList[cats[i]])
            }
        }
    }

    console.log(SetTrip.packingList);

    // SetTrip[i].packingList.Default.push(item);
    localStorage.setItem("SetTrip", JSON.stringify(SetTrip));

    var tripArray = JSON.parse(localStorage.getItem("Trips Array"));

    for (var i = 0; i < tripArray.length; i++) {
        if (tripArray[i].tripName === SetTrip.tripName) {
            tripArray[i] = SetTrip
        }
    }
    localStorage.setItem("Trips Array", JSON.stringify(tripArray));
}
$("#add-item").click(addItem);