// function doubleIt(num) {
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input  field
    inputField.value = '';

    return amountValue;

}

function updateTotalField(totalFieldId, Amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const Total = previousTotal + Amount;
    totalElement.innerText = Total;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const newBalanceTotal = previousBalanceTotal + amount;
        balanceTotal.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalanceTotal - amount;
        balanceTotal.innerText = newBalanceTotal;
    }
}

// handle deposit button event

document.getElementById('deposit-button').addEventListener('click', function () {

    // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);

    // const newDepositAmount = getInputValue('deposit-input');


    // update deposit total

    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepostiTotal = previousDepositAmount + newDepositAmount;
    // depositTotal.innerText = newDepostiTotal;

    // updateTotalField('deposit-total', newDepositAmount);

    // update account balance

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;

    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);

    };

})


// handle withdraw button event handler

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);

    // const newWithdrawAmount = getInputValue('withdraw-input');

    // set withdraw total

    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

    // updateTotalField('withdraw-total', newWithdrawAmount);

    // update balance

    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if (newWithdrawAmount > currentBalance) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You cannot withdraw more than your account balance!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }

})