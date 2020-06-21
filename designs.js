// gets the user color input from the color picker
let colorPicker = document.getElementById('colorPicker');
// gets the user input for the grid height as the number of rows
let rowsNumber = document.getElementById('inputHeight');
// gets the user input for the grid width as the number of cells
let cellsNumber = document.getElementById('inputWidth');
// gets the reference for the table output
let pixelCanvas = document.getElementById('pixelCanvas');
// gets the reference for the form output
let form = document.getElementById('sizePicker');


// creates a new grid after clicking the submit button
form.addEventListener('submit', function(e) {
    // emptys previous grid
    pixelCanvas.innerHTML = ''; 
    // cancels the default action of the submit event 
    e.preventDefault();
    // execute the function to make the grid
    makeGrid()
});


// creates a new grid from the user's rows and cells input
function makeGrid() {
    // iterates over each row in the grid
    for (let i = 0; i < rowsNumber.value; i++) {
        // inserts a new row to the grid & store its reference
        let row = pixelCanvas.insertRow(0);
        
        // iterates over each cell in the row
        for (let j = 0; j < cellsNumber.value; j++) {
            // inserts a new cell to the row
            row.insertCell(0);
        }
    }
}


// gives the user the ability to change the color of the cell by clicking it
pixelCanvas.addEventListener('click', function(e) {
    // checks if the object being clicked is a cell inside the grid
    if (e.target.nodeName === 'TD') {
        // changes the color of the clicked cell
        e.target.style.backgroundColor = colorPicker.value;
    }
});
