// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var parsed = [{ packingList: { Default: [] } }];
    if (localStorage.getItem("SetTrip")) {
        parsed = JSON.parse(localStorage.getItem("SetTrip"));
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

    var formattedStartDate = moment(SetTrip.startDate, "YYYY-MM-DD").format("ll");
    var formattedEndDate = moment(SetTrip.endDate, "YYYY-MM-DD").format("ll");

    $("#trip-name").text(SetTrip.tripName);
    $("#destination").text(SetTrip.destination);
    $("#date").text(formattedStartDate + " - " + formattedEndDate);

    $("#weatherInfo").text( "It is currently " + SetTrip.weather +  "\xB0 F"+ " in " + SetTrip.destination + " currently.");
 
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
    selectedCatBtn.text(setCategTo);
    var spanCaret = $("<span> ").addClass("caret");
    selectedCatBtn.append(spanCaret);
}
$(".set-category-btn").click(setCateg);

// -----------------------------------
function showInCateg(category, newItem) {

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
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        var categArray = SetTrip.packingList[cat]
        console.log(cats[i])

        var newItem = $("#item-input").val().trim();
        var items = SetTrip.packingList[cats[i]];
        if (cat == selectedCat) {
            console.log(items)

            if (newItem) {

            if (items.length == 0) {
                renderCatPanels(cats[i]);
                console.log(cats[i]);
            }
                showInCateg(cats[i], newItem);

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
