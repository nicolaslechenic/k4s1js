/* connexion*/
let connection = document.getElementById("login");

let mailConnection = document.getElementById("mailConnection");
let regexMailC = /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]{2,}(\.fr|\.com)$/;

let pwdConnection = document.getElementById("pwdConnection");
let regexPwdC = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

connection.addEventListener('click', connexion);

function connexion(event) {


    if (mailConnection.validity.valueMissing || pwdConnection.validity.valueMissing) {
        console.log(1);
        
        event.preventDefault();
        alert("Tu as oublié un truc, mon p'tit loup !");
        console.log(2);

    } else if (regexMailC.test(mailConnection.value) == false || regexPwdC.test(pwdConnection.value) == false) {
        console.log(3);
        event.preventDefault();
        alert("Une erreur ! Bip ! Bug système !");
        console.log(4);

    } else {  
        alert("Tu es connecté(e) !");
        console.log(5);
    }
};
