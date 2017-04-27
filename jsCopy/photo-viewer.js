var request;   //latest image to be requested
var $current;   //image currently being shown
var cache = {};  // cache object 
var $frame = $('#photo-viewer');  //larger image frame
var $thumb = $('a.hom'); //container for smaller images 

function crossfade($img) { //function to fade btwn images 
    if ($current){
        $current.stop().fadeOut('slow');
    }

    $img.css({
        marginLeft: -$img.width() /2,
        marginRight: -$img.height() /2
    }); 

    $img.stop().fadeTo('slow',1);

    $current = $img; 
}

$(document).on('click', 'a.hom', function(e){
    //$frame.html('<p>Hello</p>')
    var $img;   //create variable called $img
    var src = this.href; 
    request = src;  //store the path again in request
    e.preventDefault(); //prevent default link behaviour

    $thumb.removeClass('active'); //remove active from all photocontainers
    $(this).addClass('active'); //add active to clicked photocontainer 

    if (cache.hasOwnProperty(src)){
        if (cache[src].isLoading === false){
            crossfade(cache[src].$img); 
        }
    } else {
        $img = $('<img/>'); //store empty <img/> element in $img
        cache[src]= {
            $img : $img, 
            isLoading: true; 
        };

        $img.on('load', function(){
            $img.hide();

            $frame.removeClass('is-loading').append($img);
            cache[src].isLoading = false;

            if (request===src){
                crossfade($img)
            }
        });

        $frame.addClass('is-loading'); 

        $img.attr({
            'src': src,
            'alt':this.title || ''
        }); 
    };
});