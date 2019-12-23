       let formValid = document.getElementById('bouton_envoie');
       //------POUR LE NOM-----------
       let forgetlastname = document.getElementById('forgetlastname');
       let nom = document.getElementById('nom');
       let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
        //SERT A DETECTER LE CLIQUE D'UN UTILISATEUR
       formValid.addEventListener('click', validationNom);


       function validationNom(event) {
         
         if (nom.validity.valueMissing) {
           //SERT A VERIFIER DANS LA CONSOLE SI LA FONCTION MARCHE BIEN
           console.log('->valeur vide');
           //SERT A ANNULER LE DECLENCHEMENT SI CELUI CI EST ANNULABLE
           event.preventDefault();
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
       //-----POUR LE PRENOM-----------
       let forgetfirstname = document.getElementById('forgetfirstname');
       let prenom = document.getElementById('prenom');
       let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
        // ANTISLASH + LETTRE EX: [\S] = ENSEMBLE PRECONCUS (RACCOURCI)
        //[a-zA-Z] = C'EST UN INTERVALLE (VA CHERCHER TOUTES LES LETTRES DE L'ALPHABET MAJUSCULE OU MINUSCULE)
        //[^ + CHIFFRE OU CARACTERE] = SERT A IGNORER TOUT CARACTERE QUI NE SONT ENTRE CROCHETS
        //                   QUANTIFICATEURS
        //+ = INDIQUE QUE LE CARACTERE QUI LE PRECEDE PEUT APPARAITRE 1 OU PLUSIEURS FOIS 
        //? = INDIQUE QUE LE CARACTERE QUI LE PRECEDE PEUT APPARAITRE 0 A 1 FOIS 
        //* = INDIQUE QUE LE CARACTERE QUI LE PRECEDE PEUT APPARAITRE  0, 1 OU PLUSIEURS FOIS
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
       //-------POUR LE MAIL-----------
       let forgetmail = document.getElementById('forgetmail');
       let mail = document.getElementById('mail');
       let mailValid = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[com|fr]{2,4}$/;

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
       //--------POUR L'OBJET-----------
       let forgetobjet = document.getElementById('forgetobjet');
       let objet = document.getElementById('objet').value;

       formValid.addEventListener('click', function (event) {


         if (objet === "") {
           event.preventDefault();
           forgetobjet.innerText = 'Objet Manquant';
           forgetobjet.style.color = 'red';
         }
         console.log(objet);
       });


       //--------POUR LE MESSAGE--------
       let forgetmessage = document.getElementById('forgetmessage');
       let message = document.getElementById('message').value;

       formValid.addEventListener('click', function (event) {


         if (message === "") {
           event.preventDefault();
           forgetmessage.innerText = 'Message Manquant';
           forgetmessage.style.color = 'red';
         }
         console.log(message);
       });