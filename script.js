let numRows = 0;
let numCols = 0;
let colorSelected = '#ffffff';
// Get the table element
let table = document.getElementById("grid");

// Add a row
function addR() {
    // If there are no rows, add a row and a cell
    if (numRows === 0) {
        numCols = 0;
    }
    numRows++;
    let addRow = table.insertRow();

    // Add cells to the row
    for (let i = 0; i <= numCols; i++) {
        let newCell = addRow.insertCell();
        newCell.addEventListener("click", fillCell, false);
    }
}

// Add a column
function addC() {
    // If there are no rows, add a row and a cell
    if (numRows === 0) {
        addR();
        return;
    }
    numCols++;

    // Add cells to each row
    for (let i = 0; i < table.rows.length; i++) {
        let newCell = table.rows[i].insertCell();
        newCell.addEventListener("click", fillCell, false);
    }
}

// Remove a row
function removeR() {
    // If there are no rows, do nothing
    if (numRows === 0) {
        return;
    }
    // If there is only one row, remove the row and reset the number of columns
    numRows--;
    table.deleteRow(-1);
}

// Remove a column
function removeC() {
    // If there are no columns, do nothing
    if (numCols === 0) {
        numRows = 0;
        while (table.rows.length > 0) {
            table.deleteRow(0);
        }
        return;
    }
    // If there is only one column, remove the column and reset the number of rows
    numCols--;
    // Remove the last cell from each row
    for (let i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
    }
}

// Function to handle cell color filling
function fillCell(event) {
    event.target.style.backgroundColor = colorSelected;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    let cells = document.querySelectorAll("td");
    // Loop through all cells and fill uncolored cells with the selected color
    cells.forEach(cell => {
        if (cell.style.backgroundColor == ""){
            cell.style.backgroundColor = colorSelected;
        }
    })
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll("td");
    cells.forEach(cell =>{
        cell.style.backgroundColor = colorSelected;
    })
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");
    cells.forEach(cell =>{
        cell.style.backgroundColor = "";
    })
}
