function menuAct(indexActive){

    var menu = document.getElementById("menuActive");
    var element = menu.getElementsByClassName("nav-item");

     element[indexActive].className += " active";
}