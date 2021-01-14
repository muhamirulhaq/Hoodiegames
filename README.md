# **Hoodie Games**
## [Let's Get Started!](http://www.hoodiegames.rf.gd/?i=1)
---
## My source code
### HTML
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play! Hoodie Games</title>
    <link href="assets/css/style.css" rel="stylesheet" type="text/css" />
  </head>
  <body onscroll="scrolled()">
    <header>
      <div class="judul">
        <h1 class="saddlegames">Hoodie Games</h1>
      </div>
      <nav>
        <div class="menuonclick">&equiv;</div>
        <div class="menu">
          <a href="#"><div class="menuOption" id="home">Home</div></a>
          <a href="#"><div class="menuOption" id="about">About</div></a>
          <a href="#"><div class="menuOption" id="contact">Contact</div></a>
        </div>
      </nav>
    </header>
    <div class="menu2">
      <div class="container">
        <a href="#"><div class="menuOption2" id="home2">Home</div></a>
        <a href="#"><div class="menuOption2" id="about2">About</div></a>
        <a href="#"><div class="menuOption2" id="contact2">Contact</div></a>
      </div>
    </div>
    <div class="empty"></div>
    <main>
      <div id="box1" class="box" onmouseover="backgroundZoomIn('#box1')" onmouseout="backgroundZoomOut('#box1')"></div>
      <div id="box2" class="box" onmouseover="backgroundZoomIn('#box2')" onmouseout="backgroundZoomOut('#box2')"></div>
      <div id="box3" class="box" onmouseover="backgroundZoomIn('#box3')" onmouseout="backgroundZoomOut('#box3')"></div>
      <div id="box4" class="box" onmouseover="backgroundZoomIn('#box4')" onmouseout="backgroundZoomOut('#box4')"></div>
      <div id="box5" class="box" onmouseover="backgroundZoomIn('#box5')" onmouseout="backgroundZoomOut('#box5')"></div>
      <div id="box6" class="box" onmouseover="backgroundZoomIn('#box6')" onmouseout="backgroundZoomOut('#box6')"></div>
      <div id="box7" class="box" onmouseover="backgroundZoomIn('#box7')" onmouseout="backgroundZoomOut('#box7')"></div>
      <div id="box8" class="box" onmouseover="backgroundZoomIn('#box8')" onmouseout="backgroundZoomOut('#box8')"></div>
    </main>
    <footer>
      Copyright &copy; 2021 by Muhammad Amirul Haq
    </footer>
    <script src="assets/js/script.js"></script>
  </body>
</html>
```

### CSS
```
@import url('https://fonts.googleapis.com/css2?family=Princess+Sofia&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');

body {margin: 0;}
.empty, header {
  width: 100%;
  height: 120px;
} header {
  z-index: 1;
  display: flex;
  /* border: 1px solid black; */
  position: fixed;
  background-color: white;
}
.judul {
  position: relative;
  /* border: 1px solid black; */
  flex-basis: 30%;
}
nav {
  /* border: 1px solid black; */
  flex-basis: 70%;
  position: relative;
}
.saddlegames {
  font-family: 'Princess Sofia', cursive;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
  /* border: 1px solid black; */
}
.menuonclick {
  /* border: 1px solid black; */
  text-align: center;
  padding: 23px;
  display: none;
}
.menu {
  padding-left: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  height: 40px;
}
.menuOption {
  /* border: 1px solid black; */
  font-family: cursive, 'Yusei Magic', sans-serif;
  color: black;
  padding: 10px 20px;
  float: left;
}
.menuOption:hover {
  color: red;
}
.box {
  width: 25%;
  height: 25vw;
  float: left;
}
footer {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-align: center;
  padding: 40px;
  clear: left;
}

@media only screen and (max-width: 800px) {
  .box {
    width: 33.33%;
    height: 33.33vw;
  } header {
    flex-direction: column;
    height: 155px;
    position: static;
    width: auto;
  } .empty {display: none;}
  .judul {
    padding: 30px;
  }
} @media only screen and (max-width: 650px) {
  .box {
    width: 50%;
    height: 50vw;
  }
} @media only screen and (max-width: 450px) {
  .box {
    width: 100%;
    height: 100vw;
  }
} @media only screen and (max-width: 500px) {
  .menu {
    padding: 0;
    width: 266px;
    /* border: 1px solid black; */
  }
} 

/* @media only screen and (max-width: 300px) {
  .menu {
    text-align: center;
    position: static;
    display: block;
    border: 1px solid black;
    height: 150px;
    width: 90px;;
  } .menuonclick {
    text-align: center;
    display: block;
    padding: 23px;
  } .menuOption {
    text-align: center; 
    border: 1px solid black; width: 90px;
    padding-left: 0;
    padding-right: 0;
  } nav {
    background-color: white;
    border: 1px solid black;
    opacity: 0.5;
  } header {
    border: 1px solid black;
    height: 303px;
  }
} */
 .menu2 {
    overflow: hidden;
    padding-bottom: 20px;
    text-align: center;
    /* border: 1px solid black; */
    display: none;
} .container {
    margin: 0 auto;
    /* border: 1px solid black; */
    width: 90px;
} .menuOption2 {
    font-family: cursive, 'Yusei Magic', sans-serif;
    color: black;
    padding: 10px 20px;
} a {text-decoration: none;}

@media only screen and (max-width: 350px) {
  .menuonclick {
    display: block;
  } .menu {
     display: none;
  }
}

.menuOption2:hover, .menuonclick:active {
  color: red;
}

#box1 {background-image: url("../../tmp/1.jpg");background-size: 100%;background-position: center;}
#box2 {background-image: url("../../tmp/2.jpg");background-size: 100%;background-position: center;}
#box3 {background-image: url("../../tmp/3.jpg");background-size:100%;background-position: center;}
#box4 {background-image: url("../../tmp/4.jpg");background-size: 100%;background-position: center;}
#box5 {background-image: url("../../tmp/5.jpg");background-size: 100%;background-position: center;}
#box6 {background-image: url("../../tmp/6.jpg");background-size: 100%;background-position: center;}
#box7 {background-image: url("../../tmp/7.jpg");background-size: 100%;background-position: center;}
<!-- #box8 {background-image: url("../../tmp/8.jpg");background-size: 100%;background-position: center;}
```

### JavaScript
```
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
```