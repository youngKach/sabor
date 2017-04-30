if ($(window).width() > 480) { 
var $thumb = $('a.hom'); 
var size = $thumb.length; 
var list=[];
var ind; 

// Store each image 'href' link in "list array" so it will be accessed later on 
for ( var i = 0; i < size; i++) { 
    list[i] = $thumb.eq(i).attr("href");
}

// Crossfade function 
function crossfade(ind) {
    var $image = $('<img />');
    $image.attr({
        'src' : list[ind],
        'alt': '',
    });

    modal.open({
        content:$image, 
        width: 1050,
        height: 660
    }); 
}

// Get the first picture selected 
$(document).on('click','a.hom',function(e){  

    e.preventDefault(); 
    ind= $('a.hom').index(this);
    crossfade(ind);
});

// Right picture selector
$(document).on('click', '.toggleRight', function(){

    if (ind === size-1) { ind=0; ind--;}
    if (ind < size){
        ind++
        crossfade(ind);
    }  
});

// Left picture selector 
$(document).on('click', '.toggleLeft', function(){

    if (ind === size-1) {ind = size-1; }
    if (ind === 0){ind++; } 
    if (ind < size){
        ind--
        crossfade(ind);           
    }  
});
    
}
