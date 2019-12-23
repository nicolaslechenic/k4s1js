//------------------regex modal connect--------------------------
var modalConnectValid = document.getElementById('boutonEnvoieConnect');

var emailConnect = document.getElementById('emailConnect');
var forgetEmailConnect = document.getElementById('forgetEmailConnect');

var regexMailConnect = /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;

//vérifie le mail---------------------
modalConnectValid.addEventListener('click', validMailConnect);//déclenche la fonction au click

function validMailConnect(event) {

    //Si le champ est vide
    if (emailConnect.validity.valueMissing) {
        event.preventDefault();
        //écrit le msg a la place de la balise span
        forgetEmailConnect.textContent = 'Mail manquant';
        forgetEmailConnect.style.color = 'red';

    } 
    //si le format est incorrect
    else if (regexMailConnect.test(emailConnect.value) == false) {
    event.preventDefault();
    forgetEmailConnect.textContent = 'Format incorrect';
    forgetEmailConnect.style.color = 'red';
    } else {}
};

//vérifie le mdp-------------------------
var mdpConnect = document.getElementById('mdpConnect');
var forgetPasswordConnect = document.getElementById('forgetPasswordConnect');

modalConnectValid.addEventListener('click', validPasswordConnect);

function validPasswordConnect(event) {

    //Si le champ est vide
    if (mdpConnect.validity.valueMissing) {
        event.preventDefault();
        forgetPasswordConnect.textContent = 'Mdp manquant';
        forgetPasswordConnect.style.color = 'red';

    } 
};
//-----------------regex modal Sign--------------------
var modalSignValid = document.getElementById('boutonEnvoieSign');

var nomSign = document.getElementById('nomSign');
var forgetNameSign = document.getElementById('forgetNameSign');
var nameSignValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

var prenomSign = document.getElementById('prenomSign');
var forgetPrenomSign = document.getElementById('forgetPrenomSign');

var emailSign = document.getElementById('emailSign');
var forgetEmailSign = document.getElementById('forgetEmailSign');

var mdpSign = document.getElementById('mdpSign');
var forgetMdpSign = document.getElementById('forgetMdpSign');
var regMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}/;

var mdpSignConfirm = document.getElementById('mdpSignConfirm');
var forgetPasswordConfirm = document.getElementById('forgetPasswordConfirm');

var adresseSign = document.getElementById('adresseSign');
var forgetAdress = document.getElementById('forgetAdress');

var telSign = document.getElementById('telSign');
var forgetTelSign = document.getElementById('forgetTelSign');
var regTel = /^((\+)33|0)[1-9](\d{2}){4}$/;

//vérifie le nom--------------------
modalSignValid.addEventListener('click', validNameSign);

function validNameSign(event) {

    //Si le champ est vide
    if (nomSign.validity.valueMissing) {
        event.preventDefault();
        forgetNameSign.textContent = 'nom manquant';
        forgetNameSign.style.color = 'red';

    } 
    else if (nameSignValid.test(nomSign.value) == false) {
    event.preventDefault();
    forgetNameSign.textContent = 'Format incorrect';
    forgetNameSign.style.color = 'red';
    } else {}
};

//vérifie le prenom-------------------
modalSignValid.addEventListener('click', validFirstNameSign);

function validFirstNameSign(event) {

    //Si le champ est vide
    if (prenomSign.validity.valueMissing) {
        event.preventDefault();
        forgetPrenomSign.textContent = 'prenom manquant';
        forgetPrenomSign.style.color = 'red';

    } 
    else if (nameSignValid.test(prenomSign.value) == false) {
    event.preventDefault();
    forgetPrenomSign.textContent = 'Format incorrect';
    forgetPrenomSign.style.color = 'red';
    } else {}
};

//vérifie le mail-------------------
modalSignValid.addEventListener('click', validMailSign);

function validMailSign(event) {

    //Si le champ est vide
    if (emailSign.validity.valueMissing) {
        event.preventDefault();
        forgetEmailSign.textContent = 'Mail manquant';
        forgetEmailSign.style.color = 'red';

    } 
    else if (regexMailConnect.test(emailSign.value) == false) {
    event.preventDefault();
    forgetEmailSign.textContent = 'Format incorrect';
    forgetEmailSign.style.color = 'red';
    } else {}
};
modalSignValid.addEventListener('click', validTelSign);

function validTelSign(event) {

    //Si le champ est vide
    if (telSign.validity.valueMissing) {
        event.preventDefault();
        forgetTelSign.textContent = 'tel manquant';
        forgetTelSign.style.color = 'red';

    } 
    else if (regTel.test(telSign.value) == false) {
        event.preventDefault();
        forgetTelSign.textContent = 'Format incorrect';
        forgetTelSign.style.color = 'red';
    } else {}
};
//vérifie le tel----------------------------
modalSignValid.addEventListener('click', validPasswordSign);

function validPasswordSign(event) {
    
    //Si le champ est vide
    if (mdpSign.validity.valueMissing) {
        event.preventDefault();
        forgetMdpSign.textContent = 'mdp manquant';
        forgetMdpSign.style.color = 'red';
    }
    else if (regMdp.test(mdpSign.value) == false) {
        event.preventDefault();
        forgetMdpSign.textContent = 'Format incorrect';
        forgetMdpSign.style.color = 'red';
    } else {}
};

//vérifie le mdp confirm--------------
modalSignValid.addEventListener('click', validPasswordConfirm );

function validPasswordConfirm(event){

    if (mdpSignConfirm.validity.valueMissing){
        event.preventDefault();
        forgetPasswordConfirm.textContent = 'mdp manquant';
        forgetPasswordConfirm.style.color = 'red';
    }
    else if (regMdp.test(mdpSignConfirm.value) == false) {
        event.preventDefault();
        forgetPasswordConfirm.textContent = 'Format incorrect';
        forgetPasswordConfirm.style.color = 'red';
    } else {}
};

//vérifie l'adresse--------------
modalSignValid.addEventListener('click', validAdressSign );

function validAdressSign(event){

    if (adresseSign.validity.valueMissing){
        
        forgetAdress.textContent = 'adresse manquante';
        forgetAdress.style.color = 'red';
    }else{}
};

//vérifie que le mdp et mdpConfirm sont identique--------------------
modalSignValid.addEventListener('click', confirmPassword)

function confirmPassword(event){

    var mdpSignIdentical = document.getElementById("mdpSign").value;
    var mdpSignConfirmIdentical = document.getElementById("mdpSignConfirm").value;

    if (mdpSignIdentical!== mdpSignConfirmIdentical){
        event.preventDefault();
        forgetMdpSign.textContent = 'mdp non identique';
        forgetMdpSign.style.color = 'red';
        forgetPasswordConfirm.textContent = 'mdp non identique';
        forgetPasswordConfirm.style.color = 'red';
    }else{}
};