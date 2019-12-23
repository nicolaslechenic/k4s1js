const wrapper = document.getElementById("wrapper");


let tableau = ["public/images/imageslider/dessin.jpeg", "public/images/imageslider/dessin2.jpg", "public/images/imageslider/dessin3.jpg", "public/images/imageslider/dessin4.png", "public/images/imageslider/dessin5.jpg"];
wrapper.innerHTML = "<img src='"+ tableau[0] +"'>";



let image =0;

let flecheG = document.getElementById("right-arrow").addEventListener('click', droite);
// on retire -1 car la première image du slide est tableau[0].
function droite() {
    if (image >= tableau.length-1) {
        image =0
    } 
    else{
        image++
    }
    wrapper.innerHTML = "<img src='"+tableau[image]+"'>";
};


let flecheD = document.getElementById("left-arrow").addEventListener('click', gauche);

function gauche() {
    if (image>0) {
        image--
    }else{
        image = tableau.length-1;
    } 
    wrapper.innerHTML = "<img src='"+tableau[image]+"'>";
    
};

