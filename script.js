// Your JS goes here

var getBody = document.getElementsByTagName("body");

// Generate Yellow or Red Div
function getPercentageNumber(number){
    return (Math.floor(number*10000)/100).toString() + "%";
}

var rowNumber = 8; // also the number of columns
var gridNumber = rowNumber * rowNumber;
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

// Randomise the color of the cubes
function getRandomNumber(){
    return Math.floor(Math.random() * 11);
}

var randomNumberStack = [];

for (let x = 0; x < gridNumber; x++) {
    var r = getRandomNumber();
    randomNumberStack.push(r);
}

var firstPatternDiv = document.createElement("div");
firstPatternDiv.className="pattern";
firstPatternDiv.id="first-pattern";
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
        a.download = 'test1.jpg';
        a.click();
    }
});

var secondPatternDiv = document.createElement("div");
secondPatternDiv.className="pattern";
secondPatternDiv.id="second-pattern";
document.body.appendChild(secondPatternDiv);

for(i in randomNumberStack){
    if (randomNumberStack[i] % 3 == 0) {
        createYellowDiv(secondPatternDiv); 
    } else {
        createRedDiv(secondPatternDiv);
    }
}

html2canvas(secondPatternDiv, {
    onrendered: function (canvas) {
        var a = document.createElement('a');
        a.href = canvas.toDataURL("image/png");
        a.download = 'test2.jpg';
        a.click();
    }
});

