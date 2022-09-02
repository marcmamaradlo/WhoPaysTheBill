const tipPercent = document.querySelector('#tipPercent');
const billAmount = document.querySelector('#billAmount');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const resetTwo = document.querySelector('#resetTwo');
const calculateButton = document.querySelector('#calculateButton');
const tipCalculatorButton = document.querySelector('#tipCalculator');
const whoPaysTheBillButton = document.querySelector('#whoPaysTheBill');
const tipCalculatorButtonDiv = document.querySelector('#tipCalculatorDiv');
const whoPaysTheBillButtonDiv = document.querySelector('#whoPaysTheBillDiv');
const appendContainer = document.querySelector('#appendContainer');
const addNameButton = document.querySelector('#addNameButton');
const startButton = document.querySelector('#startButton');
const participants = document.querySelector('#participants');
const h3 = document.querySelector('#h3');
let arrayParticipants = [];


calculateButton.addEventListener('click', () => {
    calculateFunction(parseInt(tipPercent.value), parseInt(billAmount.value));
})

reset.addEventListener('click', () => {
    resetFunction();
});

tipCalculatorButton.addEventListener('click', () => {
    tipCalculatorButtonDiv.style.display = 'flex';
    whoPaysTheBillButtonDiv.style.display = 'none';
});

whoPaysTheBillButton.addEventListener('click', () => {
    whoPaysTheBillButtonDiv.style.display = 'flex';
    tipCalculatorButtonDiv.style.display = 'none';
});

addNameButton.addEventListener('click', () => {
    const name = participants.value
    appendFunction();
    arrayParticipants.push(name);
});

resetTwo.addEventListener('click', () => {
    resetParticipants();
});

startButton.addEventListener('click', () => {
    randomName();
    h3.innerText = `"${randomName()}"`;
})

function calculateFunction(tipPercent, billAmount)  {
    const amountToTip = (billAmount * tipPercent) / 100;
    result.value = amountToTip;
}

function resetFunction() {
    tipPercent.value = '';
    billAmount.value = '';
    result.value = '';
}

function appendFunction() {
    const para = document.createElement('p');
    para.innerText = participants.value;
    appendContainer.appendChild(para);
    console.log(para.innerText);
}

function resetParticipants() {
    participants.value = '';
    appendContainer.innerHTML = '';
    h3.innerHTML = '';
    arrayParticipants = [];
    console.log(arrayParticipants);
}

function randomName() {
    const random = Math.floor(Math.random() * arrayParticipants.length);
    const newName = arrayParticipants[random];
    return newName;
}

participants.addEventListener('click', () => {
    participants.value = '';
})

AOS.init();