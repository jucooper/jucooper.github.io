$(document).ready(function() {
    $('.intro').hide().fadeIn(2000);
    $('.palm-tree-icon').hide().fadeIn(2000);
    $(window).scroll( function(){
        $('.fade').each( function(i){
            var bottom_of_object = $(this).position().top + ( $(this).outerHeight() - 500 );
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'}, 3000);
            }
        });
    });


    // $( ".rocket-league" ).click( function() {
    //   if($('body').hasClass('rocket-league-background')) {
    //     $( "body" ).removeClass("rocket-league-background");
    //   }
    //   else {
    //     $( "body" ).addClass("rocket-league-background");
    //   }
    // });
});
