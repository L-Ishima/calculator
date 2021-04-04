const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');
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
const btnMulti = document.querySelector('.btn--multi');
const btnDiv = document.querySelector('.btn--div');
const btnSum = document.querySelector('.btn--sum');
const btnSub = document.querySelector('.btn--sub');
const btnRes = document.querySelector('.btn--res');
const btnClear = document.querySelector('.btn--clear');
const results = [];
// const result = 0;

btns.forEach(function(el) {
    el.addEventListener('click', function() {
        if (display.innerHTML == 0) {
            display.innerHTML = '';
        }
    })
})

btnClear.addEventListener('click', function() {
    display.innerHTML = 0;
    results.length = 0;
    console.log(results);
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
    // if (display.innerHTML === 'x') {
    //     results.push(display.innerHTML);
    // }
    if (display.innerHTML === 'x' || display.innerHTML === '0') {
        display.innerHTML = '';
    }

    display.innerHTML += 9;
    console.log(results);
})

btn0.addEventListener('click', function() {
    display.innerHTML += 0;
})

btnMulti.addEventListener('click', function() {
    results.push(display.innerHTML)
    display.innerHTML = 'x';
    results.push('*');
    console.log(results)
})

btnDiv.addEventListener('click', function() {
    display.innerHTML += '/';
    result.push(display.innerHTML, '/')
})

btnSum.addEventListener('click', function() {
    display.innerHTML += '+';
    result.push(display.innerHTML);
    console.log(result);
})

btnSub.addEventListener('click', function() {
    display.innerHTML += '-';
    result.push(display.innerHTML, '-')
})

btnRes.addEventListener('click', function() {
    // display.innerHTML += '=';
    let result;
    results.push(display.innerHTML);
    if (results[1] === '*') {
        results.splice(1, 1);
        console.log(results);
        result = parseInt(results[0]) * parseInt(results[1]);
    }
    console.log(result);
    results.length = 0;
})