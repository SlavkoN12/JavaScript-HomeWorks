let table = document.getElementById('myTable')

let rowIncreaseBtn = document.getElementById('rowPlus')
let rowDecreaseBtn = document.getElementById('rowMinus')
let columnIncreaseBtn = document.getElementById('columnPlus')
let columnDecreaseBtn = document.getElementById('columnMinus')




rowIncreaseBtn.addEventListener('click', function () {
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = "NEW CELL1";
})
rowDecreaseBtn.addEventListener('click', function () {
    document.getElementById("myTable").deleteRow(0);
})

columnIncreaseBtn.addEventListener('click', function () {
    let column = document.getElementById("newTable");
    let x = column.insertCell(0);
    x.innerHTML = "New cell";
});

columnDecreaseBtn.addEventListener('click', function(){
    let column = document.getElementById("newTable");
    column.deleteCell(-1);
})

