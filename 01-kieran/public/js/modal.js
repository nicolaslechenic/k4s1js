let modal = document.getElementById("envoi");

    let ide = document.getElementById("ide");
    let missID = document.getElementById("missID");
    let RegexID = /^[A-ZÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    modal.addEventListener('click', validide);

    function validide(event) {
        if (ide.validity.valueMissing) {
            event.preventDefault();
            missID.textContent = 'tel manquant';
            missID.style.color = 'orange';
        } else if (RegexID.test(ide.value) == false) {
            event.preventDefault();
            missID.textContent = 'Format incorrect';
            missID.style.color = 'red';
        } else {
            missID.textContent = 'Ok';
            missID.style.color = 'green';
        }
    };

    let password = document.getElementById("password");
    let missPsw = document.getElementById("missPsw");
    let RegexPsw = /^[A-ZÉÈÎÏ][a-z0-9éèêàçîï]+([-'\s][a-zA-Z0-9éèîïÉÈÎÏ][a-z0-9éèêàçîï]+)?$/;

    modal.addEventListener('click', validPsw);

    function validPsw(event) {
        if (password.validity.valueMissing) {
            event.preventDefault();
            missPsw.textContent = 'tel manquant';
            missPsw.style.color = 'orange';
        } else if (RegexPsw.test(password.value) == false) {
            event.preventDefault();
            missPsw.textContent = 'Format incorrect';
            missPsw.style.color = 'red';
        } else {
            missPsw.textContent = 'Ok';
            missPsw.style.color = 'green';
        }
    };

    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let RegexeMail = /^[a-zA-Z0-9]+@[a-zA-Z-]+\.[a-z]{2,6}$/;

    modal.addEventListener('click', validationeMail);

    function validationeMail(event) {
        if (email.validity.valueMissing) {
            event.preventDefault();
            emailError.textContent = 'mail manquant';
            emailError.style.color = 'orange';
        } 
        else if (RegexeMail.test(email.value) == false) {
            event.preventDefault();
            emailError.textContent = 'Format incorrect';
            emailError.style.color = 'red';
        } 
        else {
            emailError.textContent = 'Ok';
            emailError.style.color = 'green'
        }
    };

    let passwordcfm = document.getElementById("passwodcfm");
    let missPswcfm = document.getElementById("missOPswcfm");

    function passwordvalidation(){
        if(passwordcfm == password){
            missPswcfm.textContent = 'Ok';
            missPswcfm.style.color = 'green';
        }
        else{
            missPswcfm.textContent = 'Le mdp ne correspond pas';
            missPswcfm.style.color = 'red';
        }
    }
