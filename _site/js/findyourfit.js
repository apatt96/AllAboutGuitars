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
        case 4:
            classical += 3;
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

    $("#map").fadeIn(700);
    $(".results").show();
    initMap();
}

/* For the map */

var map;
function initMap() {

  var startPos;
  var geoSuccess = function(position) {
     startPos = position;
     document.getElementById('startLat').innerHTML = startPos.coords.latitude;
     document.getElementById('startLon').innerHTML = startPos.coords.longitude;
   };

  navigator.geolocation.getCurrentPosition(geoSuccess);
  var usrLat = document.getElementById('startLat').innerHTML;
  var usrLon = document.getElementById('startLon').innerHTML;

  var usrLoc = {lat: Number(usrLat), lng: Number(usrLon)};
  const map = new google.maps.Map(document.getElementById('map'), {
    center: usrLoc,
    zoom: 9,
    mapTypeId: 'roadmap',
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
  });

  map.data.loadGeoJson('stores.json');
  map.data.setStyle(feature => {
    return {
      icon: {
        url: "../images/icons/pick.png",
        scaledSize: new google.maps.Size(100, 64)
      }
    };
  });

  const apiKey = 'AIzaSyC61avD7xRLpQ2c__mr2hKsgDqpD8UR9G0&';
  const infoWindow = new google.maps.InfoWindow({ "max-width":0.25 });
  infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});

  map.data.addListener('click', event => {

    const name = event.feature.getProperty('name');
    const hours = event.feature.getProperty('hours');
    const phone = event.feature.getProperty('phone');
    const position = event.feature.getGeometry().get();
    const content = `
      <div style="margin: 1% 0; text-align: center; width: 250px;
        height: 80px; position: relative;">
        <h3 style="font-size: 18px; display: inline-block;">${name}</h3>
        <p style="font-size: 12px; float: right; margin-left: 5%; position: absolute; top: 50%;"><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
        <p><img style="width: 35%; margin-top:5%; float: right;" src="../images/GCLogo.jpg"></p>
      </div>
    `;

    infoWindow.setContent(content);
    infoWindow.setPosition(position);
    infoWindow.open(map);
  });
}
