// Main function to run the pixel art program
function createPixelArt(){
    //set default color
    let color = '#000000';
    // get color value from color picker
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.addEventListener('change', function(){
       // set color to new value
        color = colorPicker.value;
    });
    const sizePicker = document.getElementById('sizePicker');
    sizePicker.addEventListener('submit',function(e){
        e.preventDefault();
        // get height and width of grid
        const gridHeight = document.getElementById('inputHeight');
        const gridWidth = document.getElementById('inputWidth');
        //console.log('grid height', gridHeight.value, 'grid width ', gridWidth.value);
        // call makeGrid function
        makeGrid(gridHeight.value, gridWidth.value);
    });
    // add event listener to grid to paint cells
    const grid = document.getElementById('pixelCanvas');
    grid.addEventListener('click', function(e){
       paintGrid(color, e.target);
    });
}
// check to see if grid is displayed and reset the grid
function resetGrid(){
    // find grid
    const grid = document.getElementById('pixelCanvas');
    // check to see if table has children
    const hasColumns = grid.firstChild != null;
    if (hasColumns){
        // if grid has columns retrieve nodelist of tr elements
        const columns = grid.querySelectorAll('tr');
        columns.forEach(function(node){
            // remove nodes
            node.remove();
        });
    }
}
// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
    //check to see if grid has already been set up.
    // if so reset grid before setting up a new grid.
    resetGrid();
    const pixelCanvas = document.getElementById('pixelCanvas');
    // create pixelCanvas column
    for(let i = 0; i < height; i++){
        // create table column
        const tableColumn = document.createElement('tr');
        // for each column add table rows
        for(let j = 0; j < width; j++){
            // create table row element
            const tableRow = document.createElement('td');
            // append row to the column
            tableColumn.appendChild(tableRow);
        }
        // append column to table
        pixelCanvas.appendChild(tableColumn);
    }
}

function paintGrid(color, target){
    target.style.backgroundColor = color;
}

// initialize our pixel art maker
createPixelArt();
