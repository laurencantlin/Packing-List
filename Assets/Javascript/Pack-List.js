function addItem() {
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    for (var i = 0; i < tripsArray.length; i++) {
        var items = tripsArray[i].packingList.Default;

        var item = $("#item-input").val()
        console.log(items);

        var newItemRow = $("<div class=row>");
        newItemRow.text(item);

        var checkBox = '<input type="checkbox" aria-label="...">'
        newItemRow.prepend(checkBox);
        $("#item-view").append(newItemRow);
        tripsArray[i].packingList.Default.push(item);
        console.log(tripsArray[i].packingList);
        localStorage.setItem("Trips Array", JSON.stringify(tripsArray));

    }
}

function renderPackList() {
    var tripsArray = JSON.parse(localStorage.getItem("Trips Array"));
    console.log(trip);
    for (var i = 0; i < tripsArray.length; i++) {

        var items = tripsArray[i].packingList.Default;
        renderTripItems();
        function renderTripItems(){
            console.log(items)
        }}
    
   
    for (var i2 = 0; i2 < items.length; i++) {

        console.log(items[i2]);

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
$("#add-item").click(addItem);
console.log(trip);
