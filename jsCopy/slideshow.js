//Automatic picture SlideShow 

var slidesHolder = document.getElementById('slideShowHolder'); //image holder 
var slides = document.getElementsByClassName('slideHide'); //image element array
var i = 0;
var size = slides.length; //number of images uploaded 

function showSlides() {

    var photos = [size];
    if (i > size-1){  // reset loop 
        i = 0;
    }
    slidesHolder.innerHTML = '<img src=' +slides[i].getAttribute('src')+ ' >';

    i++;
}

(function() {setInterval(showSlides,4000);}()) //run function every 4 seconds 
