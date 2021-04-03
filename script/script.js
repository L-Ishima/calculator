const display = document.querySelector('.display');
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

btn1.addEventListener('click', function() {
    display.innerHTML = 1;
})