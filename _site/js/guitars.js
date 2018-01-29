
/*----------------ANIMATIONS----------------*/
/*MENU ANIMATION*/
$(document).ready(function(){
    $(".dropdown").hover(function(){
        $(".drop-menu").css("display", "block").hide().slideDown();
        }, function(){
        $(".drop-menu").slideUp();
    });
});

/*HOME PAGE ANIMATIONS*/
if ( window.location.pathname == '/' ){
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

/*Smooth Scroll*/
if ( window.location.pathname == '/' ){
    $(".header-nav li:first-child a").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
}

/*-----------FIND YOUR FIT----------*/













