// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {  
const gridSizeForm = document.getElementById('sizePicker'); //gets a reference to the form where grid size details are captured

gridSizeForm.addEventListener("submit",function(event){
    
var gridHeight = Number(document.getElementById("inputHeight").value); // fetches the height value
var gridWidth = Number(document.getElementById("inputWidth").value); // fetches the width value

const gridTable = document.getElementById("pixelCanvas");// makes a reference to the table object
const objColor = document.getElementById("colorPicker"); //makes a reference to the color picker object

let tableRowCount =gridTable.rows.length;

//The if part is the one i am working on, Else is perfectly fine

if (tableRowCount > 0){ // if the rowcount is greater than 1, the rows of the grid are removed.    
      var referenceToCell = document.getElementsByTagName("td");
        for(var iterate=1 ; iterate <referenceToCell.length ; iterate++){
            console.log(gridTable.rows.length);
            referenceToCell[iterate].style.backgroundColor="";
        } 
        //gridTable.innerHTML="";   
}else{
    for(var rowCount=1 ; rowCount <= gridHeight ; rowCount++){ //add rows to the table
        
        var rowInaTable = gridTable.insertRow(); // instance of a row
        
        for (var cellInRow=1 ; cellInRow <= gridWidth ; cellInRow++){
            var cellInaRow = rowInaTable.insertCell(); // inserts a cell and gets its refernce into a variable.
            
            cellInaRow.addEventListener("click",function(){ //adds a listener to each cell
                    
                    let cellColor =this.getAttribute('style');

                    if (cellColor === null || cellColor === undefined || cellColor === "background-color:null"){ // check if the color is not assigned then set a color
                        this.setAttribute('style','background-color:' + objColor.value); //obtains the value for color chosen and the same is set to the current cell
                    }else{
                        this.setAttribute('style','background-color:' + null); //obtains the value for color chosen and the same is set to the current cell
                    }

            });
        }// completes cells in a row.
    } // completes rows in a table.
}//end of main if
event.preventDefault();
});

}//end of makeGrid function

makeGrid(); // function call to initiate the grid generation

