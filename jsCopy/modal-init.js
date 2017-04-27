var $thumb = $('a.hom'); 
var size = $thumb.length; 
var list=[];
var ind; 

// Store each image 'href' link in "list array" so it will be accessed later on 
for ( var i = 0; i < size; i++) { 
    list[i] = $thumb.eq(i).attr("href");
}

function crossfade(ind) {
    var $image = $('<img/>');
    $image.attr({
        'src' : list[ind],
        'alt': '',
    });

    modal.open({
        content:$image, 
        width: 950,
        height: 660
    }); 


}

$(document).on('click','a.hom',function(e){  

    e.preventDefault(); 
    ind= $('a.hom').index(this);
    //list[ind] = $thumb.eq(ind).attr("href");
    crossfade(ind);
});

$(document).on('click', '.toggleRight', function(){

    if (ind === size-1) { ind=0; ind--;}
    if (ind < size){
        ind++
        crossfade(ind);
    }  

    // $('header').html("<p style='text-align:center'>Here it is:"+list[ind]+ "</p>");
});

$(document).on('click', '.toggleLeft', function(){

    if (ind === size-1) {ind = size-1; }
    if (ind === 0){ind++; } 
    if (ind < size){
        ind--
        crossfade(ind);           
    }  
});