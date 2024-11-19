
const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeBy = document.querySelector('.changeBy');
const resetBtn = document.querySelector('.reset-btn');


minusBtn.addEventListener('click', () => {
    const countVlaue = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBy.value);
    count.innerHTML = countVlaue - changeByValue
})

plusBtn.addEventListener('click', () => {
    const countVlaue = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBy.value);
    count.innerHTML = countVlaue + changeByValue
})

resetBtn.addEventListener('click', () => {
    count.innerHTML = 0
})























