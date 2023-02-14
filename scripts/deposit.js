document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-input');
    const previousDepositTotal = getElementValueById('deposit-total');
    const previousBalanceTotal = getElementValueById('balance-total');

    if (newDepositAmount < 0) {
        return window.alert('Please enter a valid number')
    }
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    setValueById('deposit-total', currentDepositTotal);
    setValueById('balance-total', currentBalanceTotal);


})