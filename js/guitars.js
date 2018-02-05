
/*----------------ANIMATIONS----------------*/
/*DROPDOWN ANIMATION/SCREEN CHECK*/
$(document).ready(function () {
    $(".dropdown").hover(function () {
        if ($(window).width() >= 800) {
            $(".drop-menu").css("display", "block").hide().slideDown();
        }
    }, function () {
        $(".drop-menu").slideUp();
    });
});

/*HOME PAGE ANIMATIONS*/
alert(window.location.pathname);
//$(window).scroll(function() {
if ($(window).width() > 800) {
    if ( window.location.pathname == "/AllAboutGuitars"){
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

/*Smooth Scroll*/
if ( window.location.pathname == "/AllAboutGuitars"){
    $("#scroller").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
}













