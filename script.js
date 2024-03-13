// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let grid = document.getElementById('grid'); // Get the grid table reference
    let row = grid.insertRow(0); // Insert a new row into the beginning of the grid
    numRows++; // Increment numRows

    if (numCols === 0) { //if there are no columns
        let cell = row.insertCell(0); //add one cell at the beginning of the grid
        numCols++; // Increment the global variable numCols
        return; // Exit
    }

    // however, if there are existing columns, add cells accordingly
    for (let i = 0; i < numCols; i++) {
        let cell = row.insertCell(i);
    }
}

// Add a column
function addC() {
    let grid = document.getElementById('grid');  // Get the grid table reference
    //if there are no rows, add one so that we can have a column, too
    if (numRows === 0) {
        addR();
        return;
    }
    numCols++; // Increment the global variable numCols
    // Loop through all existing rows in the grid
    for (let i = 0; i < grid.rows.length; i++) {
        let row = grid.rows[i];

        // Insert a new cell at the end of each row
        let cell = row.insertCell(row.cells.length);
  }
}

// Remove a row
function removeR() {
    let grid = document.getElementById('grid'); // Get the grid table reference
    if (numRows > 0) {
        grid.deleteRow(0); // Delete the first row
        numRows--; // Decrement numRows
    } else {    
        return;
    }

    // adjust the number of columns
    if (numRows === 0) {
        numCols = 0;
    } else {
        numCols = grid.rows[0].cells.length;
    }
}

// Remove a column
function removeC() {
    let grid = document.getElementById('grid'); // Get the grid table reference
    // if there are no columns return
    if (numCols === 0) {
        return;
    }
    numCols--; // Decrement numCols
    // Loop through all existing rows in the grid
    for (let i = 0; i < grid.rows.length; i++) {
        let row = grid.rows[i];
        // delete the last cell in each row if it exists
        if (row.cells.length > 0) {
            row.deleteCell(row.cells.length - 1);
        }
    }
    // adjust the number of rows
    if (numCols === 0) {
        numRows = 0;
    } else {
        numRows = grid.rows[0].cells.length;
    }
    // adjust the number of rows
    // numRows = grid.rows.length;
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}