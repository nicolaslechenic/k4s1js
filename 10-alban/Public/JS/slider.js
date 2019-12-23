let images = ["Public/Images/Photos/boeuf.jpg", "Public/Images/Photos/epices2.jpg", "Public/Images/Photos/donuts.jpg"];
let i = 0;
//LA FONCTION EST UTILISE POUR DEFINIR UN DELAI POUR LES FONCTIONS QUI SONT EXECUTEES INDEFINIMENT

setInterval(function(){
    document.getElementById('slide').src=images[i];//
    i++;//INCREMENTE ET RAJOUTE DES IMAGES
    if(i==3) //SI LES IMAGES SONT EGALES A 3 ALORS ELLE RETOMBE A 0 (POUR LA BOUCLE)
    i=0;
},2000);//2000 = 2 SECONDES

