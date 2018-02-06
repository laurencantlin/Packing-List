// -----------------------------------
//  RENDER PACKLIST 
function renderPackList() {
    var SetTrip = JSON.parse(localStorage.getItem("SetTrip"));
    console.log(SetTrip);
    var cats = Object.keys(SetTrip.packingList);
    // console.log(cats);
    var selectedCat = $("#categ-dropdown-btn").text().trim()
    var newItem = $("#item-input").val().trim();

    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        var categArray = SetTrip.packingList[cats[i]]
        if (cats[i] == selectedCat) {
            showInCateg(cats[i]);
            console.log(cats[i]);
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
function showInCateg(key) {
    var newItem = $("#item-input").val().trim();

    category = key;
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
        // var catR =Object.entries(SetTrip.packingList);
        // showInCateg(cats[i]);
        // renderCatPanels(cats[i]);
        if (cats[i] == selectedCat) {
            showInCateg(cats[i]);
            console.log(cats[i]);
            // categItemsArr = SetTrip.packingList[cats[i]];
            // console.log(categItemsArr);

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
}
$("#add-item").click(addItem);