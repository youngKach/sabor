$(function(){
    $('#showBtn').on('click', function(){
        var $Nav = $('#smallNav');
        if ($Nav.hasClass('w3-hide')){ 
            $Nav.removeClass('w3-hide').addClass('w3-show');
        } else if ($Nav.hasClass('w3-show')){ 
            $Nav.removeClass('w3-show').addClass('w3-hide');
            $Nav.on('click', function(){$Nav.removeClass('w3-show').addClass('w3-hide');});
        }
    }); 
}); 
 



