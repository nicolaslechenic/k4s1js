//FORM VALIDATION    problem with reset button does not clear error message state
                    let formValid = document.getElementById("contactUsForm");
                    let name = document.getElementById("nom");
                    let email = document.getElementById("email");
                    let objet = document.getElementById("objet");
                    let message = document.getElementById("message");
                    // spans  to show messages
                    let nameReq = document.getElementById("nameReq");
                    let emailReq = document.getElementById("emailReq");
                    let objetReq = document.getElementById("objetReq");
                    let messagetReq = document.getElementById("messageReq");
                    
                    let nameRegExp = /(^[A-Z\xC0-\xD6Ø\xd8-\xdd][a-zà-öø-ÿ]+) ?-?([A-Z\xC0-\xD6Ø\xd8-\xdd][a-zà-öø-ÿ]+)? ?-?([A-Z\xC0-\xD6Ø\xd8-\xdd][a-zà-öø-ÿ]+)?$/ //can not add "limit to min 3 charachters" 
                    let emailRegExp = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/i;
                    let objetRegExp = /([A-Za-z\xC0-\xD6Ø\xd8-\xdd.,_+!&?*=^'`\- ]+){1,30}$/i;
                    let messageRegExp = /([A-Za-z.,_+!&?*=^'`()\- \xC0-\xD6Ø\xd8-\xdd]+){1,256}$/i;

                    let nameResult = nameRegExp.test(name.value);
                    let emailResult = emailRegExp.test(email.value);
                    let objetResult = objetRegExp.test(objet.value);
                    let messageResult = messageRegExp.test(message.value);

                    let formFields = [name, email, objet, message];
                    let formFieldsReq = [nameReq, emailReq, objetReq, messageReq];
                    let formFieldsNames = ["Name", "Email", "Objet", "Message"]
                    let formRegExp = [nameResult, emailResult, objetResult, messageResult]

                    

                   console.log(email.value)
                    // automated empty fields rerporting (change to forEach)
                    formValid.addEventListener("click", function validate(submit)
                    {

                      for (let i = 0; i < formFieldsNames.length; i++)
                      {
                      if (formFields[i].value == "")
                      
                        {
                          console.log ("ok")
                          console.log (formFields[i]);
                          console.log (formFields[i].value);
                          formFieldsReq[i].textContent = formFieldsNames[i] + " is missing";
                          formFieldsReq[i].style.color = "red";
                           submit.preventDefault();
                           
                        }
                      else if (formRegExp[i] === false)
                      {
                        formFieldsReq[i].textContent = formFieldsNames[i] + " is not conform"
                        formFieldsReq[i].style.color = "red";
                        submit.preventDefault();

                      }
                      }
                      
                    });
                    function clearMessages()
                    {
                      for (let i = 0; i < formFieldsNames.length; i++)
                      {
                        formFieldsReq[i].textContent = "";
                        formFieldsReq[i].textContent = "";
                      }
                      
                    }