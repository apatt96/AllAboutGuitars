var electric = 0;
var acoustic = 0;
var hollowbody = 0;
var classical = 0;

var slideIndex = 1;
showDivs(slideIndex);

/*SLIDESHOW*/

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("question");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    $(x[slideIndex - 1]).animate({opacity: '1'}, 700);
    
    /*$(":button").click(function(){
       $(x[slideIndex - 1]).animate({opacity: '0'}, 700);
    });*/
}

/*QUESTIONS*/

function qFunction0() {
    plusDivs(1);
    var x;
    x = document.getElementById("age").value;
    if (x < 30 || x > 60) {
        electric++;
        acoustic++;
    } else if (isNaN(x)) {
        alert("please enter a valid age");
        plusDivs(-1);
    } else {
        classical++;
        hollowbody++;
    }
}

function qFunction1() {
    plusDivs(1);
    var obj = document.getElementById("experience").selectedIndex;
    switch (obj) {
        case 0:
            electric++;
            acoustic++;
            break;
        case 1:
            classical++;
            hollowbody++;
            break;
        case 2:
            classical++;
            hollowbody++;
            electric++;
            acoustic++;
            break;
    }
}

function qFunction2() {
    plusDivs(1);
    var obj = document.getElementById("music").selectedIndex;
    switch (obj) {
        case 0:
            electric++;
            hollowbody++
            break;
        case 1:
            hollowbody++;
            acoustic++
            break;
        case 2:
            electric++;
            break;
        case 3:
            acoustic++;
            hollowbody++;
            break;
        case 5:
            classical++;
            break;
    }
}

function qFunction3() {
    plusDivs(1);
    var obj = document.getElementById("budget").selectedIndex;
    switch (obj) {
        case 0:
            electric++;
            acoustic++;
            break;
        case 1:
            electric++;
            acoustic++;
            classical++;
            break;
        case 2:
            hollowbody++;
            electric++;
            acoustic++;
            break;
    }
    decision();
}

function decision() {
    var options = [electric, acoustic, hollowbody, classical];
    var largest = 0;
    for (var i = 1; i < options.length; i++) {
        if (options[i] > options[largest]){
            largest = i;
        }
    }
    switch (largest) {
        case 0: 
            plusDivs(0);
            break;
        case 1:
            plusDivs(1);
            break;
        case 2:
            plusDivs(2);
            break;
        case 3:
            plusDivs(3);
            break;
    }
}
