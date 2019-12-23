let i = 0;
let picture = [ 'public/images/magicbookboy.jpg','public/images/bookofimagination.jpg',
'public/images/girlforest.jpg', 'public/images/warhammeradventure.jpg'];
let time = 3000 ;

    function changePic(){
        document.slide.src = picture[i];

        if (i < picture.length - 1){
            i++;
        }
        else {
            i = 0;
        }
        setTimeout("changePic()", time);
    }

    window.onload = changePic;

    let rightarrow = document.getElementById('right-arrow')
    let leftarrow = document.getElementById('left-arrow')

leftarrow.addEventListener('click', left)
    function left(){
        if (i > 0){
            i--
        }
        else {
            i = picture.length-1
        }
        wrapper.innerHTML = "<img src = '"+picture[i]+"'>"
    }

rightarrow.addEventListener('click', right)
    function right(){
        if (i >= picture.length-1){
            i = 0;
        }
        else {
            i++
        }
        wrapper.innerHTML = "<img src = '"+picture[i]+"'>"
    }