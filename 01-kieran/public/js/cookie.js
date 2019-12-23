document.getElementById("cookieok").addEventListener("click", hideCookiebar);
function hideCookiebar() {
  // je cache ma barre
  document.getElementById("cookie-bar").style.display = 'none';
  // si oui je stocke dans cookieAgree
  sessionStorage.setItem("cookiedac", "true")
};
if(sessionStorage.getItem("cookiedac") == "true"){
  // si oui ete si elle est stokér donc display none
  document.getElementById("cookie-bar").style.display = 'none';
}
//si l'utilisateur refuse
document.getElementById("nocookie").addEventListener("click", redirection);
function redirection() {

  document.location.href="https://www.google.com/"

};
