// Your JS goes here

var getBody = document.getElementsByTagName("body");
var patternDiv = document.createElement("div");
patternDiv.id="pattern";
document.body.appendChild(patternDiv);

function getPercentageNumber(number){
    return (Math.floor(number*10000)/100).toString() + "%";
}

var rowNumber = 8; // also the number of columns
var gridNumber = rowNumber * rowNumber;
var percentageNumber = getPercentageNumber(1/rowNumber);

function createYellowDiv() {
    var createYellowDiv = document.createElement("div");
    patternDiv.appendChild(createYellowDiv)
    createYellowDiv.style.paddingBottom = percentageNumber;
    createYellowDiv.style.width = percentageNumber;
    createYellowDiv.style.backgroundColor = "yellow"
    createYellowDiv.style.float = "left"
}

function createRedDiv() {
    var createRedDiv = document.createElement("div");
    patternDiv.appendChild(createRedDiv)
    createRedDiv.style.paddingBottom = percentageNumber;
    createRedDiv.style.width = percentageNumber;
    createRedDiv.style.backgroundColor = "red"
    createRedDiv.style.float = "left"
}

function getRandomNumber(){
    return Math.floor(Math.random() * 11);
}

// for (let i = 0; i < 3; i++) {
 
// }

var randomNumberStack = [];
for (let x = 0; x < gridNumber; x++) {
    var r = getRandomNumber();
    randomNumberStack.push(r);
}

console.log(randomNumberStack);

for(i in randomNumberStack){
    if (randomNumberStack[i] % 2 == 0) {
        createRedDiv(); 
    } else {
        createYellowDiv();
    }
}

html2canvas(patternDiv, {
onrendered: function (canvas) {
    var a = document.createElement('a');
    a.href = canvas.toDataURL("image/png");
    a.download = 'test1.jpg';
    a.click();
    }
});