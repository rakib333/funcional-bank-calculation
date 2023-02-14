function getInputValueById(input) {
    const inputValue = document.getElementById(input);
    const value = parseFloat(inputValue.value);
    inputValue.value = '';
    return value;
}

function getElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const element = parseFloat(textElement.innerText);
    textElement.innerText = '';
    return element;
}

function setTotalValue(elementId, newValue) {
    const textValue = document.getElementById(elementId);
    textValue.innerText = newValue;
}



// deposit and withdraw section
document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = getInputValueById("deposit-input");
    const previousDeposit = getElementValueById('deposit-total');
    const newDeposit = depositInput + previousDeposit;
    setTotalValue('deposit-total', newDeposit)


    // update balance 
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + depositInput;
    setTotalValue('balance-total', newBalanceTotal)

  });



// withdraw er hisab
document.getElementById("withdraw-button").addEventListener("click", function () {
    const withdrawInput = getInputValueById("withdraw-input");
    const previousWithdraw = getElementValueById('withdraw-total');
    const newWithdraw = withdrawInput + previousWithdraw;
    setTotalValue('withdraw-total', newWithdraw);

    // update balance 
    const previousBalance = getElementValueById('balance-total');
    const newBalance = previousBalance - withdrawInput;
    setTotalValue('balance-total', newBalance)
    
  });
