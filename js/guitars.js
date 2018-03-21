/*----------------ANIMATIONS----------------*/


$("#map").hide();
$(".results").hide();

/*HOME PAGE ANIMATIONS*/

/*Header Fade*/
if ($(window).width() > 800) {
    if ( location.pathname == "/index.html" || location.pathname == "/"){
        $(".header").hide();
        var topofDiv = $(".hero-home").offset().top;
        var height = $(".hero-home").outerHeight();
        $(window).scroll(function(){
            if($(window).scrollTop() > (topofDiv + height)){
               $(".header").fadeIn(250);
            }
            else{
               $(".header").hide();
            }
        });
    }
    else {
        $(".header").show();
    }
}
