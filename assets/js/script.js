if(document.documentElement.scrollTop > document.querySelector("header").offsetHeight && window.innerWidth > 350) document.querySelector("header").style.boxShadow = "0px 1px 10px rgba(50, 50, 50, 1)";

function scrolled() {
    if(window.innerWidth <= 350) return;
    let x = 0;
    let y = 0;
    for(let i = 0; i < 1000; i++) {
        y += 0.001;
        if(document.documentElement.scrollTop < document.querySelector("header").offsetHeight * y) {
            document.querySelector("header").style.boxShadow = "0px 1px 10px rgba(50, 50, 50, " + x + ")";
            break;
        }
        x = y;
    }
}

document.querySelector(".menuonclick").addEventListener("click", function() {
  if(document.querySelector(".menu2").style.display == "block") {
    document.querySelector(".menu2").style.display = "none";
    document.querySelector(".menuonclick").innerHTML = "&equiv;";
  } else {
    document.querySelector(".menu2").style.display = "block";
    document.querySelector(".menuonclick").innerHTML = "&times;";
  }
});

// Media Query Method with setInterval()
setInterval(function() {
  if(window.innerWidth > 350) {
    document.querySelector(".menu2").style.display = "none";
    document.querySelector(".menuonclick").innerHTML = "&equiv;";
  } else document.querySelector("header").style.boxShadow = "0px 1px 10px rgba(50, 50, 50, 0)";
},1);

function backgroundZoomIn(box) {
  let i = 100;
  let j = 100;
  const interval = setInterval(function() {
    if(i == 150) clearInterval(interval);
    document.querySelector(box).style.backgroundSize = i + "%";
    document.querySelector(box).style.filter = "brightness(" + j + "%)";
    i+=2;
    j-=3.2;
  },1);
}

function backgroundZoomOut(box) {
  let i = 150;
  let j = 20;
  const interval = setInterval(function() {
    if(i == 100) clearInterval(interval);
    document.querySelector(box).style.backgroundSize = i + "%";
    document.querySelector(box).style.filter = "brightness(" + j + "%)";
    i-=2;
    j+=3.2;
  },1);
}