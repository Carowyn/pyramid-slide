// pull in the height and symbol
var heightElem = document.getElementById("height");
var symbolElem = document.getElementById("symbol");

// set a handler function for the submission of the symbol
symbolElem.onchange = function(event) {

    // figure out the symbol by dropdown menu
    symbol = symbolElem.value;
    //console.log(symbol)

// set a handler function for the submission of the height
heightElem.oninput = function(event) {

    // figure out the height set by slider
    heightStr = heightElem.value;

    height = parseInt(heightStr);
    //console.log(height)

    //put value in container
    document.getElementById("slider").innerHTML = "&nbsp;&nbsp;" + height;

// draw a pyramid with the selected height and symbol
drawPyramid(height, symbol);
}}

function drawPyramid(height, symbol) {

    document.getElementById("pyramid").innerHTML = "";

    // for each row
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build the row string
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp;";
            rowStr += spaceChar;
    }

    for (var i = 0; i < numBricks; i++) {
        rowStr += symbol;
    }

        // make <p> element for the row and insert into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}

/*

*/
