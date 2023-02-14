document.getElementById('btn-login').addEventListener('click', function(){
    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    if (email === 'pola@baap.com' && password === 'takaden'){
        return window.location.href = 'dashboard.html'
    }

    else{
        return window.alert('oi fokinni! password or email check kor!')
    }
})