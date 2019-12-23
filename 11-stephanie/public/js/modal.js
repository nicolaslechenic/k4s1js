let modal = document.getElementById("envoyer");

let mod = document.getElementById("mod");
let mod1 = document.getElementById("mod1");
let mod2 = document.getElementById("mod2");
let mod3 = document.getElementById("mod3");

let namemod = document.getElementById("nomM");
let nameValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let prenommod = document.getElementById("prenomM");
let prenommodValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let mailM = document.getElementById("mailM");
let regexMailM = /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{2,}(\.fr|\.com)$/;

let passwordM = document.getElementById("pwdM");
let regexPwdM = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\.])(?=.{8,})/;


// nom et prenom
modal.addEventListener('click', nomModal)


function nomModal(event) {

    if (namemod.validity.valueMissing) {
        event.preventDefault();
        mod.innerHTML="&#xf12a";

    } else if (nameValid.test(namemod.value) == false) {
        event.preventDefault();
        mod.innerHTML="&#xf00d";

    } else {
        mod.innerHTML="&#xf00c";
        event.preventDefault();
    }
};

modal.addEventListener('click', prenomModal);
function prenomModal(event) {

    if (prenommod.validity.valueMissing) {
        event.preventDefault();
        mod1.innerHTML="&#xf12a";

    } else if (prenommodValid.test(prenommod.value) == false) {
        event.preventDefault();
        mod1.innerHTML="&#xf00d";

    } else {
        event.preventDefault();
        mod1.innerHTML="&#xf00c";
    }
};
modal.addEventListener('click',modalMail );
function modalMail(event) {


    if (mailM.validity.valueMissing) {
        event.preventDefault();
        mod2.innerHTML="&#xf12a";

    } else if (regexMailM.test(mailM.value) == false) {
        event.preventDefault();
        mod2.innerHTML="&#xf00d";

    } else {
        event.preventDefault();
        mod2.innerHTML="&#xf00c";
    }
};


modal.addEventListener('click', motdepasseModal)


function motdepasseModal(event) {

    if (passwordM.validity.valueMissing) {
        event.preventDefault();
        mod3.innerHTML="&#xf12a";

    } else if (regexPwdM.test(passwordM.value) == false) {
        event.preventDefault();
        mod3.innerHTML="&#xf00d";

    } else {
        mod3.innerHTML="&#xf00c";
        event.preventDefault();
    }
};
