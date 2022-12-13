const time = document.querySelector('.time'); //Display time
function updateTime(){
    let hourMinute = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    time.textContent = `${hourMinute}`;
}
setInterval(updateTime, 100);

const num0 = document.querySelector('.num0');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');
const num3 = document.querySelector('.num3');
const num4 = document.querySelector('.num4');
const num5 = document.querySelector('.num5');
const num6 = document.querySelector('.num6');
const num7 = document.querySelector('.num7');
const num8 = document.querySelector('.num8');
const num9 = document.querySelector('.num9');
const numAC = document.querySelector('.numAC');
const numPow = document.querySelector('.numPow');
const numMod = document.querySelector('.numMod');
const numDiv = document.querySelector('.numDiv');
const numMult = document.querySelector('.numMult');
const numSub = document.querySelector('.numSub');
const numAdd = document.querySelector('.numAdd');
const numDEL = document.querySelector('.numDEL');
const numDot = document.querySelector('.numDot');
const numEqual = document.querySelector('.numEqual');

const firstResult = document.querySelector('.first-result-text');
const secondResult = document.querySelector('.second-result-text');

let a = '';
let b = '';
let operatorEntered = 0;
let addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
let result = 0, equal = 0;

//Number keys functions

num0.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 0;
        if (operatorEntered){
            b += '0';
            secondResult.textContent = b;
        }
        else{
            a += '0';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 0;
        if (operatorEntered){
            b += '0';
            secondResult.textContent = b;
        }
        else{
            a += '0';
        }
    }
}
num1.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 1;
        if (operatorEntered){
            b += '1';
            secondResult.textContent = b;
        }
        else{
            a += '1';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 1;
        if (operatorEntered){
            b += '1';
            secondResult.textContent = b;
        }
        else{
            a += '1';
        }
    }
}
num2.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 2;
        if (operatorEntered){
            b += '2';
            secondResult.textContent = b;
        }
        else{
            a += '2';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 2;
        if (operatorEntered){
            b += '2';
            secondResult.textContent = b;
        }
        else{
            a += '2';
        }
    }
}
num3.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 3;
        if (operatorEntered){
            b += '3';
            secondResult.textContent = b;
        }
        else{
            a += '3';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 3;
        if (operatorEntered){
            b += '3';
            secondResult.textContent = b;
        }
        else{
            a += '3';
        }
    }
}
num4.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 4;
        if (operatorEntered){
            b += '4';
            secondResult.textContent = b;
        }
        else{
            a += '4';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 4;
        if (operatorEntered){
            b += '4';
            secondResult.textContent = b;
        }
        else{
            a += '4';
        }
    }
}
num5.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 5;
        if (operatorEntered){
            b += '5';
            secondResult.textContent = b;
        }
        else{
            a += '5';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 5;
        if (operatorEntered){
            b += '5';
            secondResult.textContent = b;
        }
        else{
            a += '5';
        }
    }
}
num6.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 6;
        if (operatorEntered){
            b += '6';
            secondResult.textContent = b;
        }
        else{
            a += '6';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 6;
        if (operatorEntered){
            b += '6';
            secondResult.textContent = b;
        }
        else{
            a += '6';
        }
    }
}
num7.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 7;
        if (operatorEntered){
            b += '7';
            secondResult.textContent = b;
        }
        else{
            a += '7';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 7;
        if (operatorEntered){
            b += '7';
            secondResult.textContent = b;
        }
        else{
            a += '7';
        }
    }
}
num8.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 8;
        if (operatorEntered){
            b += '8';
            secondResult.textContent = b;
        }
        else{
            a += '8';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 8;
        if (operatorEntered){
            b += '8';
            secondResult.textContent = b;
        }
        else{
            a += '8';
        }
    }
}
num9.onclick = () => {
    if (equal == 0){
        secondResult.textContent += 9;
        if (operatorEntered){
            b += '9';
            secondResult.textContent = b;
        }
        else{
            a += '9';
        }
    }
    else if (equal == 1){
        reset();
        secondResult.textContent += 9;
        if (operatorEntered){
            b += '9';
            secondResult.textContent = b;
        }
        else{
            a += '9';
        }
    }
}
numDot.onclick = () => {
    if (equal == 0 && dotCount == 0){
        secondResult.textContent += '.';
        if (operatorEntered){
            b += '.';
            secondResult.textContent = b;
            dotCount = 1;
        }
        else{
            dotCount = 1;
            a += '.';
        }
    }
    else if (equal == 1 && dotCount == 0){
        reset();
        secondResult.textContent += '.';
        if (operatorEntered){
            b += '.';
            secondResult.textContent = b;
            dotCount = 1;
        }
        else{
            dotCount = 1;
            a += '.';
        }
    }
}
//Operator keys functions

numPow.addEventListener('click', () => {
    if (operatorEntered == 0 && a){ //Prevent enter operator first (but also prevent toggle state when only a number is entered, therefore prevent b input)
        operatorEntered = 1;
        addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 1, dotCount = 0;
        firstResult.textContent = `${a} ^`;
    }
    else if (operatorEntered == 1){ //Chain number pairing
        addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 1, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} ^`;
        equal = 0;
    }
}) 
numMod.addEventListener('click', () => {
    if (operatorEntered == 0 && a){
        operatorEntered = 1;
        addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 1, powCount = 0, dotCount = 0;
        firstResult.textContent = `${a} %`;
    }
    else if (opera1orEntered == 1){
        addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 1, powCount = 0, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} %`;
        equal = 0;
    }
}) 
numDiv.addEventListener('click', () => {
    if (operatorEntered == 0 && a){
        operatorEntered = 1;
        addCount = 0, subCount = 0, multCount = 0, divCount = 1, modCount = 0, powCount = 0, dotCount = 0;
        firstResult.textContent = `${a} /`;
    }
    else if (operatorEntered == 1){
        addCount = 0, subCount = 0, multCount = 0, divCount = 1, modCount = 0, powCount = 0, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} /`;
        equal = 0;
    }
}) 
numMult.addEventListener('click', () => {
    if (operatorEntered == 0 && a){
        operatorEntered = 1;
        addCount = 0, subCount = 0, multCount = 1, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        firstResult.textContent = `${a} *`;
    }
    else if (operatorEntered == 1){
        addCount = 0, subCount = 0, multCount = 1, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} *`;
        equal = 0;
    }
}) 
numSub.addEventListener('click', () => {
    if (operatorEntered == 0 && a){
        operatorEntered = 1;
        addCount = 0, subCount = 1, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        firstResult.textContent = `${a} -`;
    }
    else if (operatorEntered == 1){
        addCount = 0, subCount = 1, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} -`;
        equal = 0;
    }
}) 
numAdd.addEventListener('click', () => {
    if (operatorEntered == 0 && a && a){
        operatorEntered = 1;
        addCount = 1, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        firstResult.textContent = `${a} +`;
    }
    else if (operatorEntered == 1){
        addCount = 1, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
        a = result;
        b = '';
        firstResult.textContent = `${a} +`;
        equal = 0;
    }
}) 

numEqual.addEventListener('click', () => { //When hitting equal button
    if (a) a = parseFloat(a);
    if (b) b = parseFloat(b);
    if (addCount == 1) {
        firstResult.textContent = `${a} + ${b}`
        result = add(a,b);
    }
    else if (subCount == 1) {
        firstResult.textContent = `${a} - ${b}`
        result = subtract(a,b);
    }
    else if (multCount == 1) {
        firstResult.textContent = `${a} * ${b}`
        result = multiply(a,b);
    }
    else if (divCount == 1) {
        firstResult.textContent = `${a} / ${b}`
        result = divide(a,b);
    }
    else if (modCount == 1) {
        firstResult.textContent = `${a} % ${b}`
        result = modulus(a,b);
    }
    else if (powCount == 1) {
        firstResult.textContent = `${a} ^ ${b}`
        result = power(a,b);
    }
    equal = 1;
    if (operatorEntered == 0){
        secondResult.textContent = a;
        equal = 0;
        // a = '';
    }
    else secondResult.textContent = result;
})

numAC.addEventListener('click', () => reset());


function add(a,b){
    console.log(a);
    console.log(b);
    console.log(a+b);
    return a+b;
}
function subtract(a,b){
    console.log(a);
    console.log(b);
    console.log(a-b);
    return a-b;
}
function multiply(a,b){
    console.log(a);
    console.log(b);
    console.log(a*b);
    return a*b;
}
function divide(a,b){
    console.log(a);
    console.log(b);
    console.log(Math.round( (a/b) * 100 + Number.EPSILON ) / 100);
    return (b == 0) ? 'ERROR' : Math.round( (a/b) * 100 + Number.EPSILON ) / 100;
}
function modulus(a,b){
    console.log(a);
    console.log(b);
    console.log(a%b);
    return (b == 0) ? 'ERROR' : a%b;
}
function power(a,b){
    console.log(a);
    console.log(b);
    console.log(Math.pow(a,b));
    return Math.pow(a,b);
}

function reset(){
    a = '';
    b = '';
    operatorEntered = 0;
    addCount = 0, subCount = 0, multCount = 0, divCount = 0, modCount = 0, powCount = 0, dotCount = 0;
    result = 0, equal = 0;
    secondResult.textContent = '';
    firstResult.textContent = '';
}