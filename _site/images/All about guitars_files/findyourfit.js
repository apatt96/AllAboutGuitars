var electric = 0;
var acoustic = 0;
var hollowbody = 0;
var classical = 0;

$(".firstTwo").flip({
    trigger: 'manual',
    axis: 'x'
});

function qFunction0() {
    var x;
    x = document.getElementById("age").value;
    if (x < 30 || x > 60) {
        electric++;
        acoustic++;
    } else {
        classical++;
        hollowbody++;
    }
    $(".firstTwo").flip('toggle');
}

function qFunction1() {
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
    $(".firstTwo").flip('toggle');
}

function aFunction3() {
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

function aFunction4(){
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


