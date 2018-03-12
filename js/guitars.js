
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


//$(window).scroll(function() {
if ($(window).width() > 800) {
    if ( window.location.pathname == '{{ "/index.html" | relative_url }}' || window.location.pathname == '{{ "/" | relative_url }}'){
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
if ( window.location.pathname == '{{ "/index.html" | relative_url }}' || window.location.pathname == '{{ "/" | relative_url }}'){
    $("#scroller").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
}
