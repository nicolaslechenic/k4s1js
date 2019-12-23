let formValid = document.getElementById("submit");

let ok = document.getElementById("valid");
let ok1 = document.getElementById("valid1");
let ok2 = document.getElementById("valid2");
let ok3 = document.getElementById("valid3");
let ok4 = document.getElementById("valid4");
let ok5 = document.getElementById("valid5");

let nom = document.getElementById("nomC");
let nomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let prenom = document.getElementById("prenomC");
let prenomValid = /^([a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

let mobile = document.getElementById("mobileC");
let regexTel = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

let mail = document.getElementById("courrielC");
let regexMail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.com|\.fr$/;

let adresse = document.getElementById("adresseC");

let texta = document.getElementById("messageC");

formValid.addEventListener('click', validation);

function validation(event) {

    if (nom.validity.valueMissing) {
        event.preventDefault();
        ok.src = "public/pictos/error.png";

    } else if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        ok.src = "public/pictos/wrong.png";

    } else {
        ok.src = "public/pictos/ok.png";
        document.write(nom.charAt(0).toUpperCase() + nom.substring(1).toLowerCase());
    }
};
formValid.addEventListener('click', validationprenom);
function validationprenom(event) {

    if (prenom.validity.valueMissing) {
        event.preventDefault();
        ok1.src = "public/pictos/error.png";

    } else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        ok1.src = "public/pictos/wrong.png";

    } else {

        ok1.src = "public/pictos/ok.png";
    }
};

formValid.addEventListener("click", validTel);

function validTel(event) {

    if (mobile.validity.valueMissing) {
        event.preventDefault();
        ok2.src="public/pictos/error.png";
    } else if (regexTel.test(mobile.value) == false) {
        event.preventDefault();
        ok2.src="public/pictos/wrong.png";
    } else {
        ok2.src="public/pictos/ok.png";
    }
};

formValid.addEventListener("click", confirMail);

function confirMail(event) {

    if (mail.validity.valueMissing) {
        
        event.preventDefault();
        ok3.src="public/pictos/error.png";
    } else if (regexMail.test(mail.value) == false) {
        event.preventDefault();
        ok3.src="public/pictos/wrong.png";
        
    } else {
        ok3.src="public/pictos/ok.png";
    }
};


formValid.addEventListener("click", validAdresse);

function validAdresse(event) {

    if (adresse.validity.valueMissing) {
        event.preventDefault();
        ok4.src="public/pictos/error.png";
    } else {
        ok4.src="public/pictos/ok.png";
    }
};

formValid.addEventListener("click", confirMessage);

function confirMessage(event) {

    if (texta.validity.valueMissing) {
        event.preventDefault();
        ok5.src="public/pictos/error.png";
    } else {
        ok5.src="public/pictos/ok.png";
    }
};

let reset = document.getElementById("reset");
reset.addEventListener("click", efface);

function efface() {
    document.location.reload(true);
   
};
