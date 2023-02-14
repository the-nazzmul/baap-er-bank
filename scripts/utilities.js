// function for getting the value of a input field

function getInputValueById (inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// function for getting the value of a element

function getElementValueById (elementId){
    const elementField = document.getElementById(elementId);
    const elementFieldValueString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldValueString);
    return elementFieldValue;
}


// function for replacing the old value with the new one

function setValueById (elementId, newValue){
    const textField = document.getElementById(elementId);
    textField.innerText = newValue;
}