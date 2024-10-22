addBtnElement = document.getElementById('counterAdd');
subBtnElement = document.getElementById('counterSub');
counterDisplayElement = document.getElementById('counter-display');

let total = 0;
const limit = 20;

function updateCounterDisplay() {
    if(total > limit)
        total = limit;

    if(total < 0)
        total = 0;

    counterDisplayElement.textContent = total;
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`);
}

addBtnElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
})

subBtnElement.addEventListener('click', () => {
    total -= 1;
    updateCounterDisplay();
})

updateCounterDisplay();