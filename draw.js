const container = document.querySelector('.container');
//initial boxWidth since grid is 16x16 (=960 width / 16)
var boxWidth = 60;
createGrid(16,16);


function createRow(itemLength){
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for(let i = 0; i < itemLength; i++){
        const newBox = document.createElement('div');
        const random = Math.floor(Math.random()*16777215).toString(16);
        newBox.className = "box";
        newBox.style.width= `${boxWidth}px`;
        newBox.style.height= `${boxWidth}px`;
        newBox.style.border= '0.5px solid black';
        newBox.addEventListener('mouseover', function(){
            let boxColor = newBox.style.backgroundColor = '#' + `${random}`;
        })
        newRow.appendChild(newBox);
    }
    container.appendChild(newRow);
}

function createGrid(rowLength, columnLength){
    for(let i = 0; i < columnLength; i++){
        createRow(rowLength);
    }
}

function reset(gridSize){
    let boxes = document.querySelectorAll('.box');
    for(let i =0; i < boxes.length; i++){
        boxes[i].remove();
    }
    createGrid(gridSize,gridSize);
}

let resetButton = document.getElementById("reset");
resetButton.onclick = function(){
    let gridLength = window.prompt("Enter the desired grid pixel length!");
    if(gridLength > 100){
        gridLength = window.prompt("Grid length is too long, re-enter:")
    }
    boxWidth = 960/gridLength;
    reset(gridLength);
};
