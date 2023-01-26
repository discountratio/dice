const diceScreen = document.getElementById('dice-screen');
const diceButtons = document.getElementById('dice-buttons');

const diceButton = document.createElement('button');
diceButton.classList.add('dice-button');
diceButton.textContent = 'Roll Dice';
diceButton.addEventListener('click', rollDice);

diceButtons.appendChild(diceButton);


const dices = {
    1: {
        row1: [' ', ' ', ' '],
        row2: [' ', 'o', ' '],
        row3: [' ', ' ', ' '],
    },
    2: {
        row1: ['o', ' ', ' '],
        row2: [' ', ' ', ' '],
        row3: [' ', ' ', 'o'],
    },
    3: {
        row1: ['o', ' ', ' '],
        row2: [' ', 'o', ' '],
        row3: [' ', ' ', 'o'],
    },
    4: {
        row1: ['o', ' ', 'o'],
        row2: [' ', ' ', ' '],
        row3: ['o', ' ', 'o'],
    },
    5: {
        row1: ['o', ' ', 'o'],
        row2: [' ', 'o', ' '],
        row3: ['o', ' ', 'o'],
    },
    6: {
        row1: ['o', ' ', 'o'],
        row2: ['o', ' ', 'o'],
        row3: ['o', ' ', 'o'],
    },
}

function rollDice() {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    const diceDisplay = document.createElement('div');
    diceScreen.innerHTML ='';
    diceDisplay.classList.add('dice-display');
    diceDisplay.innerHTML = `
        <div class="dice-row">
            <div class="dice-cell">${dices[randomDice].row1[0]}</div>
            <div class="dice-cell">${dices[randomDice].row1[1]}</div>
            <div class="dice-cell">${dices[randomDice].row1[2]}</div>
        </div>
        <div class="dice-row">
            <div class="dice-cell">${dices[randomDice].row2[0]}</div>
            <div class="dice-cell">${dices[randomDice].row2[1]}</div>
            <div class="dice-cell">${dices[randomDice].row2[2]}</div>
        </div>
        <div class="dice-row">
            <div class="dice-cell">${dices[randomDice].row3[0]}</div>
            <div class="dice-cell">${dices[randomDice].row3[1]}</div>
            <div class="dice-cell">${dices[randomDice].row3[2]}</div>
        </div>
    `;




    diceScreen.appendChild(diceDisplay);
    const diceCircles = Array.from(document.querySelectorAll('.dice-cell'));
    diceCircles.forEach(diceCircle => {
        if (diceCircle.textContent === 'o') {
            diceCircle.classList.add('circle');
        }
    });

    console.log('dice rolled: ' + randomDice);
}  

