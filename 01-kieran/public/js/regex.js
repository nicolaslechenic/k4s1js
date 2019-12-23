let formValid = document.getElementById("submit");
//regex pour l'email
        let mail = document.getElementById("mail");
        let mailError = document.getElementById("mailError");
        let RegexMail = /^[a-zA-Z0-9]+@[a-zA-Z-]+\.[a-z]{2,6}$/;

        formValid.addEventListener('click', validationMail);
        function validationMail(event){
            if (mail.validity.valueMissing){
                event.preventDefault();
                mailError.textContent = 'mail manquant';
                mailError.style.color = 'orange';
            }
            else if (RegexMail.test(mail.value) == false) {
                event.preventDefault();
                mailError.textContent = 'Format incorrect';
                mailError.style.color = 'red';
            }
            else{}
        };
//regex pour le nom

        let nom = document.getElementById("nom");
        let missNom = document.getElementById("missNom");
        let RegexNom = /^([A-ZÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

        formValid.addEventListener('click', validNom);
        function validNom(event){
            if(nom.validity.valueMissing){
                event.preventDefault();
                missNom.textContent = 'nom manquant';
                missNom.style.color = 'orange';
            }
            else if(RegexNom.test(nom.value) == false){
                event.preventDefault();
                missNom.textContent = 'Format incorrect';
                missNom.style.color = 'red';
            }
            else{
                missNom.textContent = 'Ok';
                missNom.style.color = 'green';
            }
        };
//regex pour le prenom

        let prenom = document.getElementById("prenom");
        let missprenom = document.getElementById("missprenom");
        let RegexPrenom = /^([A-ZÉÈÎÏ][a-zéèêàçîï]{2,})+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]{2,})?$/;

        formValid.addEventListener('click', validPrenom);
        function validPrenom(event){
            if(prenom.validity.valueMissing){
                event.preventDefault();
                missprenom.textContent = 'prenom manquant';
                missprenom.style.color = 'orange';
            }
            else if(RegexPrenom.test(prenom.value) == false){
                event.preventDefault();
                missprenom.textContent = 'Format incorrect';
                missprenom.style.color = 'red';
            }
            else{ 
                missprenom.textContent = 'Ok';
                missprenom.style.color = 'green';
            }
            
        };

        let phone = document.getElementById("phone");
        let missPhone = document.getElementById("missPhone");
        let RegexPhone = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
        
        formValid.addEventListener('click', validPhone);
        function validPhone(event){
            if(phone.validity.valueMissing){
                event.preventDefault();
                missPhone.textContent = 'tel manquant';
                missPhone.style.color = 'orange';
            }
            else if(RegexPhone.test(phone.value) == false){
                event.preventDefault();
                missPhone.textContent = 'Format incorrect';
                missPhone.style.color = 'red';
            }
            else{
                missPhone.textContent = 'Ok';
                missPhone.style.color = 'green';
            }
        };