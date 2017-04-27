//modal window object definition 

var modal = (function(){
    var $window = $(window);
    var $modal = $('<div class = "modal" />');
    var $content = $('<div class = "modal-content" />'); 
    var $close = $('<i class="fa fa-close modal-close" style="font-size:30px;color:red;cursor:pointer;"></i>'); 
    var $right = $('<span class=" fa fa-chevron-right toggleRight" style="font-size:40px;color:red;cursor:pointer;"></span>');
    var $left = $('<span class=" fa fa-chevron-left toggleLeft" style="font-size:40px;color:red;cursor:pointer;"></span>'); 

    $modal.append($content,$close,$right,$left);  //add close button to modal 

    $close.on('click', function(e){ //if user clicks on close 
        e.preventDefault();         //prevent default link behaviour
        modal.close();            //close the modal window 
    }); 



    return {

        center: function(){
            var top = Math.max($window.height() - $modal.innerHeight(), 0)/2 ;
            var left = Math.max($window.width() - $modal.innerWidth(), 0)/2 ; 

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft(),
            }); 
        },

        open: function(settings) {
            $content.empty().append(settings.content);

            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body'); 

            modal.center();

            $(window).on('resize', modal.center);
        },

        close: function() {
            $content.empty();
            $modal.detach(); 
            $(window).off('resize', modal.center); 
        }

    };   

}());