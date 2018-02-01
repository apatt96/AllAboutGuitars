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
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
 $(x[slideIndex-1]).hide();
  $(x[slideIndex-1]).fadeIn("slow"); 
}

/*QUESTIONS*/

function qFunction0() {
    plusDivs(1);
    var x;
    x = document.getElementById("age").value;
    if (x < 30 || x > 60) {
        electric++;
        acoustic++;
    } else if(isNaN(x)) {
      alert("please enter a valid number");  
        plusDivs(-1);
    } 
    else {
        classical++;
        hollowbody++;
    }
}

function qFunction1() {
    plusDivs(1);
    var obj = document.getElementById("experience").selectedIndex;
    switch(obj) {
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
    switch(obj) {
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

function qFunction3(){
    plusDivs(1);
    var obj = document.getElementById("budget").selectedIndex;
    switch(obj) {
        case 0:
            electric++;
            acoustic++;
            classical++;
            break;
        case 1:
            hollowbody++;
            electric++;
            acoustic++;
            break;
        case 2:
            electric++;
            acoustic++;
            break;  
    }
    decision();   
}

function decision() {
    var options = [electric, acoustic, hollowbody, classical];
    options.sort();
    var conclusion = options[3];
    alert(conclusion);
    switch(conclusion) {
        case 0:
            //href..// conclusion page
            break;
        case 1:
            
            break;
        case 2:
            
            break;  
    }
}


