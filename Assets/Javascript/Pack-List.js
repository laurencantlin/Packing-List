// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    // console.log(SetTrip);

    for (var i = 0; i < SetTrip.length; i++) {
        var items = SetTrip[i].packingList.Default;
        console.log("hi")//    


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

}
renderPackList();

// -----------------------------------
// SET CATEGORY DROPDOWN
function setCateg() {
  
  var selectedCatBtn=$("#categ-dropdown-btn");
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

    var showInCateg = function (key) {
        category = key;

        itemView = $("." + category);
        var newItem = $("#item-input").val().trim();
        if (newItem) {
            var newItemRow = $("<div class=row>");
            newItemRow.text(newItem);
            var checkBox = '<input type="checkbox" aria-label="...">'
            newItemRow.prepend(checkBox);
            itemView.append(newItemRow);
        }
    }

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        function renderCatPanels(categg) {
            console.log(categg)
            var newPanel = $("#panels-view").html()
            $("#panels-view").empty();

            console.log(newPanel);
            // $("#panels-view").append("<br>");
            $("#panels-view").append(newPanel);
        }
        renderCatPanels(cats[i]);
        if (cats[i] == selectedCat) {
            console.log("his");
            showInCateg(cats[i]);
        }
    }
    // SetTrip[i].packingList.Default.push(item);
    // console.log(SetTrip[i].packingList);
    localStorage.setItem("SetTrip", JSON.stringify(SetTrip));
}
$("#add-item").click(addItem);