
// Selection Buttons Start //
const tipCalculatorButton = document.querySelector('#tipCalculator');
const tipCalculatorDiv = document.querySelector('#tipCalculatorDiv');

const whoPaysTheBillButton = document.querySelector('#whoPaysTheBill');
const whoPaysTheBillDiv = document.querySelector('#whoPaysTheBillDiv');

const splitTheBillButton = document.querySelector('#splitTheBill');
const splitTheBillDiv = document.querySelector('#splitTheBillDiv');

const openCalculatorButton = document.querySelector('#openCalculator');
const openCalculatorDiv = document.querySelector('#openCalculatorDiv');


tipCalculatorButton.addEventListener('click', () => {
    tipCalculatorDiv.style.display = 'flex';
    whoPaysTheBillDiv.style.display = 'none';
    splitTheBillDiv.style.display = 'none';
    openCalculatorDiv.style.display = 'none';
});

whoPaysTheBillButton.addEventListener('click', () => {
    whoPaysTheBillDiv.style.display = 'flex';
    tipCalculatorDiv.style.display = 'none';
    splitTheBillDiv.style.display = 'none';
    openCalculatorDiv.style.display = 'none';
});

splitTheBillButton.addEventListener('click', () => {
    splitTheBillDiv.style.display = 'flex';
    tipCalculatorDiv.style.display = 'none';
    whoPaysTheBillDiv.style.display = 'none';
    openCalculatorDiv.style.display = 'none';
});

openCalculatorButton.addEventListener('click', () => {
    openCalculatorDiv.style.display = 'flex';
    splitTheBillDiv.style.display = 'none';
    tipCalculatorDiv.style.display = 'none';
    whoPaysTheBillDiv.style.display = 'none';
});
// Selection Buttons End //

// Tip Calculator Start //
const tipPercent = document.querySelector('#tipPercent');
const billAmount = document.querySelector('#billAmount');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');
const calculateButton = document.querySelector('#calculateButton');

calculateButton.addEventListener('click', () => {
    calculateFunction(parseInt(tipPercent.value), parseInt(billAmount.value));
})

reset.addEventListener('click', () => {
    resetFunction();
});

function calculateFunction(tipPercent, billAmount)  {
    const amountToTip = (billAmount * tipPercent) / 100;
    result.value = amountToTip;
}

function resetFunction() {
    tipPercent.value = '';
    billAmount.value = '';
    result.value = '';
}
// Tip Calculator End //

// Who Pays The Bill Start //
const resetTwo = document.querySelector('#resetTwo');

const appendContainer = document.querySelector('#appendContainer');
const addNameButton = document.querySelector('#addNameButton');
const startButton = document.querySelector('#startButton');
const participants = document.querySelector('#participants');
const h3 = document.querySelector('#h3');
let arrayParticipants = [];

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

participants.addEventListener('click', () => {
    participants.value = '';
})

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
// Who Pays The Bill End //

// Splt The Bill Start //
const removeOne = document.querySelector('#removeOne');
const addOne = document.querySelector('#addOne');
const staticInput = document.querySelector('#staticInput');
const amountToSplit = document.querySelector('#amountToSplit');
const amountToPay = document.querySelector('#amountToPay');
const resetThree = document.querySelector('#resetThree');
const splitButton = document.querySelector('#splitButton');
let count = 0;

removeOne.addEventListener('click', () => {
    removeOneFunc();
});

addOne.addEventListener('click', () => {
    addOneFunc();
});

splitButton.addEventListener('click', () => {
    splitButtonFunc();
});

resetThree.addEventListener('click', () => {
    resetThreeFunc();
});


function removeOneFunc() {
    count -- ;
    staticInput.value = count;
}

function addOneFunc() {
    count ++ ;
    staticInput.value = count;
}

function splitButtonFunc() {
    amountToPay.value = amountToSplit.value / staticInput.value;
    console.log('click', amountToPay.value);
}

function resetThreeFunc() {
    staticInput.value = '';
    amountToSplit.value = '';
    amountToPay.value = '';
}
// Splt The Bill End //

// Open Calculator Start //
const numberButtons = Array.from(document.querySelectorAll('#button'));
const operationButtons = Array.from(document.querySelectorAll('#operator'));
const equalsButton = document.querySelector('#equals');
const deleteButton = document.querySelector('#delete');
const allClearButton = document.querySelector('#allClear');
const current = document.querySelector('#current');
const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('body');
let refresh = false;

equalsButton.addEventListener('click', function () {
    current.innerText = eval(current.innerText);
    refresh = true;
});

deleteButton.addEventListener('click', function () {
    if (current.innerText) {
        current.innerText = current.innerText.slice(0, -1);
    }
});

allClearButton.addEventListener('click', function () {
    current.innerText = '';
});

numberButtons.map(button => {
    button.addEventListener('click', (e) => {
        if (refresh) {
            current.innerText = '';
            refresh = false;
        }
        current.innerText += e.target.innerText;
    });
});

operationButtons.map(operation => {
    operation.addEventListener('click', (e) => {
        current.innerText += e.target.innerText;
    });
});
// Open Calculator End //


// AOS.init();