function menuAct(indexActive){
    
    var menu = document.getElementById("menuActive"); /*id de UL*/
    var element = menu.getElementsByClassName("nav-item"); /*id de LI*/
     element[indexActive].className += " active";
     /* mettre un script menuActiv(valeur de l'index)*/
}