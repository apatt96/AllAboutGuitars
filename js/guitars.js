/*----------------ANIMATIONS----------------*/

$("#map").hide();
/*Header Fade*/
if ($(window).width() > 800) {
    if ( location.pathname == "/index.html" || location.pathname == "/AllAboutGuitars/index.html" || location.pathname == "/AllAboutGuitars" ){
        $(".header").hide();
        var topofDiv = $(".hero-home").offset().top;
        var height = $(".hero-home").outerHeight();
        $(window).scroll(function(){
            if($(window).scrollTop() > (topofDiv + height - 10)){
               $(".header").fadeIn(250);
               $(".full-home").css('background', 'rgba(0, 0, 0, 0.3)');
            }
            else{
               $(".header").fadeOut(250);
               $(".full-home").css('background', 'rgba(0, 0, 0, 0)');
            }
        });
    }
    else {
        $(".header").show();
    }
}
