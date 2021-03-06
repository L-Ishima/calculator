const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');
const btnNumber = document.querySelectorAll('.btn--number');
const btn1 = document.querySelector('.btn--1');
const btn2 = document.querySelector('.btn--2');
const btn3 = document.querySelector('.btn--3');
const btn4 = document.querySelector('.btn--4');
const btn5 = document.querySelector('.btn--5');
const btn6 = document.querySelector('.btn--6');
const btn7 = document.querySelector('.btn--7');
const btn8 = document.querySelector('.btn--8');
const btn9 = document.querySelector('.btn--9');
const btn0 = document.querySelector('.btn--0');
const btnOperations = document.querySelectorAll('.btn--operation');
const btnMulti = document.querySelector('.btn--multi');
const btnDiv = document.querySelector('.btn--div');
const btnSum = document.querySelector('.btn--sum');
const btnSub = document.querySelector('.btn--sub');
const btnRes = document.querySelector('.btn--res');
const btnClear = document.querySelector('.btn--clear');
const results = [];

btns.forEach(function(el) {
    el.addEventListener('click', function() {
        if (display.innerHTML === 'x' || display.innerHTML === '/' || display.innerHTML === '+' || display.innerHTML === '-' ) {
            display.innerHTML = '';
        }
        if (display.length === 0 && display.innerHTML === "0") {
            display.classList.add('display-clear');
            display.innerHTML = null;
        }
        if (display.length !== 0) {
            display.classList.remove('display-clear');
        }
    })
})

btnOperations.forEach(function(op) {
    op.addEventListener('click', function() {
        display.innerHTML === "" ? results.push(0) : results.push(display.innerHTML);
        if (typeof results[0] == 'number' && results.length === 2) {
            results.splice(1,1);
        }
        if (results.length === 3) {
            getResult();
            // results.push(results[0]);
            console.log(results);
        }
    })   
})

btnClear.addEventListener('click', function() {
    display.innerHTML = "";
    results.length = 0;
    display.classList.add('display-clear');
})

btn1.addEventListener('click', function() {
    display.innerHTML += 1;
})

btn2.addEventListener('click', function() {
    display.innerHTML += 2;
})

btn3.addEventListener('click', function() {
    display.innerHTML += 3;
})

btn4.addEventListener('click', function() {
    display.innerHTML += 4;
})

btn5.addEventListener('click', function() {
    display.innerHTML += 5;
})

btn6.addEventListener('click', function() {
    display.innerHTML += 6;
})

btn7.addEventListener('click', function() {
    display.innerHTML += 7;
})

btn8.addEventListener('click', function() {
    display.innerHTML += 8;
})

btn9.addEventListener('click', function() {
    display.innerHTML += 9;
})

btn0.addEventListener('click', function() {
    display.innerHTML += 0;
})

btnMulti.addEventListener('click', function() {
    display.innerHTML = 'x';
    results.push('*');
})

btnDiv.addEventListener('click', function() {
    display.innerHTML = '/';
    results.push('/');
})

btnSum.addEventListener('click', function() {
    display.innerHTML = '+';
    results.push('+');
})

btnSub.addEventListener('click', function() {
    display.innerHTML = '-';
    results.push('-');
})

function getResult() {

    let result;
    // results.push(display.innerHTML);
    if (results[1] === '*') {
        result = parseInt(results[0]) * parseInt(results[2]);
        console.log(results);
    }
    if (results[1] === '/') {
        if (results[2] === '0') {
            alert('??????????????????, ???? ???????? ???????????? ????????????!');
            result = 0;
        } else {
            result = parseInt(results[0]) / parseInt(results[2]);
            console.log(results);
        }
    }
    if (results[1] === '+') {
        result = parseInt(results[0]) + parseInt(results[2]);
        console.log(results);
    }
    if (results[1] === '-') {
        result = parseInt(results[0]) - parseInt(results[2]);
        console.log(results);
    }
    console.log(result);
    console.log(results);
    display.innerHTML = result;
    if (result === 0) {
        display.innerHTML = null;
        display.classList.add('display-clear');
    }
    if (result === NaN || result === Infinity || result === undefined) {
        display.innerHTML = 0;
        alert('????????????!');
    }
    results.length = 0;
    results.push(result);
}
    
btnRes.addEventListener('click', function() {
    results.push(display.innerHTML);
    getResult(); 
})
