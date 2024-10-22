addBtnElement = document.getElementById('counterAdd');
subBtnElement = document.getElementById('counterSub');
counterDisplayElement = document.getElementById('counter-display');

let total = 0;
const upperLimit = 50;

function updateCounterDisplay() {
    if(total > upperLimit)
        total = upperLimit;

    if(total < 0)
        total = 0;

    counterDisplayElement.textContent = total;
}

addBtnElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
})

subBtnElement.addEventListener('click', () => {
    total -= 1;
    updateCounterDisplay();
})
