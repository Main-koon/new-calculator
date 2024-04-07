const idResult = document.getElementById("result");

let numbers = [];

findIdNumber();

onclickNumbers()

function clickNumber(outputNumber) {
    idResult.innerText = idResult.innerText + outputNumber;
}

function findIdNumber() {
    for (let i = 0; i < 10; i++) {
        numbers.push(document.getElementById("number" + i))
    }
}
function onclickNumbers() {
    for (let i = 0; i < 10; i++) {
        numbers[i].onclick = function () { clickNumber(i); };
    }
}

function onclickSings(sing) {
    if (sing == "+" || sing == "/" || sing == "*" ) {
        if (idResult.innerText[idResult.innerText.length - 1] != null) {
            if (idResult.innerText[idResult.innerText.length - 1] != "+" &&
            idResult.innerText[idResult.innerText.length - 1] != "-" &&
            idResult.innerText[idResult.innerText.length - 1] != "/" &&
            idResult.innerText[idResult.innerText.length - 1] != "*" &&
            idResult.innerText[idResult.innerText.length - 1] != "." ) {
            idResult.innerText = idResult.innerText + sing;
            }
        }
    } else {
        if (idResult.innerText[idResult.innerText.length - 2] != "+" &&
            idResult.innerText[idResult.innerText.length - 1] != "-" &&
            idResult.innerText[idResult.innerText.length - 2] != "/" &&
            idResult.innerText[idResult.innerText.length - 2] != "*" &&
            idResult.innerText[idResult.innerText.length - 1] != "." ) {
            idResult.innerText = idResult.innerText + sing;
            }
    }
}

function makeEquals() {
    idResult.innerText = eval(idResult.innerText);
}

const idPlus = document.getElementById("plus");
const idMinus = document.getElementById("minus");
const idDivide = document.getElementById("divide");
const idMultiply = document.getElementById("multiply");

const idEquals = document.getElementById("equals");

idPlus.onclick = function () { onclickSings("+"); };
idMinus.onclick = function () { onclickSings("-"); };
idDivide.onclick = function () { onclickSings("/"); };
idMultiply.onclick = function () { onclickSings("*"); };

idEquals.onclick = makeEquals;

const idClear = document.getElementById("clear");
const idBackspace = document.getElementById("backspace");

function clear() {
    idResult.innerText = "";
}
function backspace() {
    idResult.innerText = idResult.innerText.slice(0, -1);
}

idClear.onclick = clear;
idBackspace.onclick = backspace;

const idPoint = document.getElementById("point");

function onclickPoint() {
if (idResult.innerText[idResult.innerText.length - 1] != null) {
    if (idResult.innerText[idResult.innerText.length - 1] != "+" &&
        idResult.innerText[idResult.innerText.length - 1] != "-" &&
        idResult.innerText[idResult.innerText.length - 1] != "/" &&
        idResult.innerText[idResult.innerText.length - 1] != "*" &&
        idResult.innerText[idResult.innerText.length - 1] != "." ) {
            idResult.innerText = idResult.innerText + "."
    }
}
}

idPoint.onclick = onclickPoint;