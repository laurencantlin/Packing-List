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
// ADD ITEM TO PACKLIST
function addItem(event) {
    event.preventDefault();
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    var cats = Object.keys(SetTrip.packingList);
    var selectedCat = $("#categ-dropdown-btn").text().trim()

    var showInCateg = function (key) {
        category = key;
        selectedCat = $("#categ-dropdown-btn")

        itemView = $("." + category);
        console.log(category);
        var newItem = $("#item-input").val()
        console.log(newItem);
        var newItemRow = $("<div class=row>");
        newItemRow.text(newItem);
        var checkBox = '<input type="checkbox" aria-label="...">'
        newItemRow.prepend(checkBox);
        itemView.append(newItemRow);
        // return selectedCat.text() == category;
    }

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        if (cats[i] == selectedCat) {
            console.log("his");
            showInCateg(cats[i]);
        }
    }




// var funky = function (key) {
//     console.log(key, SetTrip.packingList[key]);
// }

// Object.keys(SetTrip.packingList).every(showInCateg);

// SetTrip[i].packingList.Default.push(item);
// console.log(SetTrip[i].packingList);
localStorage.setItem("SetTrip", JSON.stringify(SetTrip));

}
$("#add-item").click(addItem);


// -----------------------------------
// SET CATEGORY DROPDOWN
function setCateg() {
    console.log("setcat")
}
$(".set-category-btn").click(setCateg);

