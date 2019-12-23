function menuActive(indexActive){
    let menu = document.getElementById('menuactive');//RECUPERE MES UL AVEC L'ID
    let element = menu.getElementsByClassName('nav-item');//RECUPERE MES LI AVEC LA CLASS

    element[indexActive].className += " active";//LA FONCTION ACTIVE LA PAGE SUR LAQUELLE ON SE TROUVE RAPPELER ENSUITE DANS LE CSS POUR Y METTRE DE LA COULEUR
}