
/*----ANIMATIONS-----*/
/*Menu Animation*/
$(document).ready(function(){
    $(".dropdown").hover(function(){
        $(".drop-menu").css("display", "block").hide().slideDown();
        }, function(){
        $(".drop-menu").slideUp();
    });
});

/*Header Scroll-to*/
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

//if (document.URL.contains("index.html")) { detecting page
    $(".header-nav li:first-child a").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
//}