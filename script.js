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
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
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