function addItem() {
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));

    if(!tripsArray){
        tripsArray = [];
    }
    for (var i = 0; i < tripsArray.length; i++) {

        var item = $("#item-input").val()
        console.log(item);

        var newItemRow = $("<div class=row>");
        newItemRow.text(item);

        var checkBox = '<input type="checkbox" aria-label="...">'
        newItemRow.prepend(checkBox);
        $("#item-view").append(newItemRow);
        tripsArray[i].packingList.Default.push(item);
        console.log(tripsArray[i]);
        localStorage.setItem("Trips Array", JSON.stringify(tripsArray));

    }
}

function renderItems() {

}

$("#add-item").click(addItem);
