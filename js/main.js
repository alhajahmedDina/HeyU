$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
       scrollTop = $(window).scrollTop();
       if( scrollTop >0 ){
           $('.navbar').addClass('scrolledNav');
       }
        else if( scrollTop <= 0){
           $('.navbar').removeClass('scrolledNav');
        }
    });
    
    $("#backToTop").click(function(){
        $("body , html").animate({
            scrollTop:0 } , 800 );
    });
    
});