document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-input');
    const previosWithdrawTotal = getElementValueById('withdraw-total');
    const previousBalanceTotal = getElementValueById('balance-total');

    if (newWithdrawAmount > previousBalanceTotal){
        return window.alert('Insufficient balance!!')
    }
    if (newWithdrawAmount < 0){
        return window.alert('Please enter a valid number')
    }
    const currentWithdrawTotal = previosWithdrawTotal + newWithdrawAmount;
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    
    setValueById('withdraw-total', currentWithdrawTotal);
    setValueById('balance-total',currentBalanceTotal);
})
