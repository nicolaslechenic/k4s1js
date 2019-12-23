       let formValid = document.getElementById('bouton_envoie');
       //------POUR LE NOM---------
       let forgetlastname = document.getElementById('forgetlastname');
       let nom = document.getElementById('nom');
       let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
        //ATTEND LE CLICK POUR DECLENCHER LA FONCTION
       formValid.addEventListener('click', validationNom);


       function validationNom(event) {
      
         if (nom.validity.valueMissing) {
           console.log('->valeur vide');
           event.preventDefault();
           //AFFICHE LE MESSAGE A LA PLACE DU SPAN
           forgetlastname.textContent = 'Nom Manquant';
           forgetlastname.style.color = 'red';
         } else if (nomValid.test(nom.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetlastname.textContent = 'Format incorrect';
           forgetlastname.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetlastname.textContent = '';
         }
       }
       //------POUR LE PRENOM-------
       let forgetfirstname = document.getElementById('forgetfirstname');
       let prenom = document.getElementById('prenom');
       let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

       formValid.addEventListener('click', validationPrenom);


       function validationPrenom(event) {
        
         if (prenom.validity.valueMissing) {
           console.log('->valeur vide');
           event.preventDefault();
           forgetfirstname.textContent = 'Prénom Manquant';
           forgetfirstname.style.color = 'red';
         } else if (prenomValid.test(prenom.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetfirstname.textContent = 'Format incorrect';
           forgetfirstname.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetfirstname.textContent = '';
         }
       }
       //-------POUR LE MAIL--------
       let forgetmail = document.getElementById('forgetmail');
       let mail = document.getElementById('mail');
       let mailValid = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

       formValid.addEventListener('click', validationMail);


       function validationMail(event) {
       
         if (mail.validity.valueMissing) {
           console.log('->valeur vide');
           event.preventDefault();
           forgetmail.textContent = 'Mail Manquant';
           forgetmail.style.color = 'red';
         } else if (mailValid.test(mail.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetmail.textContent = 'Format incorrect';
           forgetmail.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetmail.textContent = '';
         }
       }
       //-------POUR LE MOT DE PASSE-------
       let forgetpassword = document.getElementById('forgetpassword');
       let password = document.getElementById('password');
       let passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

       formValid.addEventListener('click', validationPassword);


       function validationPassword(event) {
        
         if (password.validity.valueMissing) {
           console.log('->valeur vide');
           event.preventDefault();
           forgetpassword.textContent = 'Mot de Passe Manquant';
           forgetpassword.style.color = 'red';
         } else if (passwordValid.test(password.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetpassword.textContent = 'Format incorrect';
           forgetpassword.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetpassword.textContent = '';
         }
       }
       //-------POUR LA CONFIRMATION DU MOT DE PASSE-------
       let forgetconfirmpassword = document.getElementById('forgetconfirmpassword');
       let confirm = document.getElementById('confirm');
       let confirmValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;

       formValid.addEventListener('click', validationConfirm);


       function validationConfirm(event) {
        
         if (confirm.validity.valueMissing) {
           console.log('->valeur vide');
           event.preventDefault();
           forgetconfirmpassword.textContent = 'Mot de Passe Manquant';
           forgetconfirmpassword.style.color = 'red';
         } else if (confirmValid.test(confirm.value) == false) {
           console.log('->valeur incorrect');
           event.preventDefault();
           forgetconfirmpassword.textContent = 'Format incorrect';
           forgetconfirmpassword.style.color = 'blue';
         } else {
           console.log('->valeur ok');
           forgetconfirmpassword.textContent = '';
         }
       }