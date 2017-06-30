// CONFIGURATION
// Size of the checkboard
var rowNumber = 8; // also the number of columns
var gridNumber = rowNumber * rowNumber;
// Number of the set of image to be generated
var setNumber = 3;

// Funtions to generate Yellow or Red Div
function getPercentageNumber(number){
    return (Math.floor(number*10000)/100).toString() + "%";
}

// Width of the checkerboard: in percentage of the window's width
var percentageNumber = getPercentageNumber(1/rowNumber); 

function createYellowDiv(parentDiv) {
    var createYellowDiv = document.createElement("div");
    parentDiv.appendChild(createYellowDiv)
    createYellowDiv.style.paddingBottom = percentageNumber;
    createYellowDiv.style.width = percentageNumber;
    createYellowDiv.style.backgroundColor = "yellow"
    createYellowDiv.style.float = "left"
}

function createRedDiv(parentDiv) {
    var createRedDiv = document.createElement("div");
    parentDiv.appendChild(createRedDiv)
    createRedDiv.style.paddingBottom = percentageNumber;
    createRedDiv.style.width = percentageNumber;
    createRedDiv.style.backgroundColor = "red"
    createRedDiv.style.float = "left"
}

// Generate random numbers to randomise the color of the cubes
function getRandomNumber(){
    return Math.floor(Math.random() * 11);
}

// Start the generate patterns
for(let n = 0; n < setNumber; n++){
    var randomNumberStack = [];

    for (let x = 0; x < gridNumber; x++) {
        var r = getRandomNumber();
        randomNumberStack.push(r);
    }

    var firstPatternDiv = document.createElement("div");
    firstPatternDiv.className="pattern";
    firstPatternDiv.id="first-pattern-"+n;
    document.body.appendChild(firstPatternDiv);

    for(i in randomNumberStack){
        if (randomNumberStack[i] % 3 == 0) {
            createRedDiv(firstPatternDiv); 
        } else {
            createYellowDiv(firstPatternDiv);
        }
    }

    html2canvas(firstPatternDiv, {
        onrendered: function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = n+'-pattern-1'+'.jpg';
            a.click();
        }
    });

    var randomChangeNumber = Math.floor(Math.random() * gridNumber);

    var secondPatternDiv = document.createElement("div");
    secondPatternDiv.className="pattern";
    secondPatternDiv.id="second-pattern-"+n;
    document.body.appendChild(secondPatternDiv);

    for(i in randomNumberStack){
        if(i == randomChangeNumber){
            if (randomNumberStack[i] % 3 == 0) {
                createYellowDiv(secondPatternDiv); 
            } else {
                createRedDiv(secondPatternDiv);
            }
        }
        else{
            if (randomNumberStack[i] % 3 == 0) {
                createRedDiv(secondPatternDiv);
            } else {
                createYellowDiv(secondPatternDiv);
            }
        }
        
    }

    html2canvas(secondPatternDiv, {
        onrendered: function (canvas) {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = n+'-pattern-2'+'.jpg';
            a.click();
        }
    });
}


