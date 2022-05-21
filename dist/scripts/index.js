function lightTopicOn() {
  document.getElementById("personalData").style.color = "white";
  document.getElementById("first").style.animationPlayState = "paused";
  document.getElementById("first").style.opacity = "1";
  document.getElementById("second").style.animationPlayState = "paused";
  document.getElementById("second").style.opacity = "0";
  document.getElementById("third").style.animationPlayState = "paused";
  document.getElementById("fourth").style.animationPlayState = "paused";
  document.getElementById("fifth").style.animationPlayState = "paused";
  document.getElementById("sixth").style.animationPlayState = "paused";
  document.getElementById("seventh").style.animationPlayState = "paused";
  document.getElementById("eigth").style.animationPlayState = "paused";
  document.getElementById("ninth").style.animationPlayState = "paused";
}

function lightTopicOff() {
  document.getElementById("personalData").style.color = "black";
  document.getElementById("first").style.animationPlayState = "running";
  document.getElementById("second").style.animationPlayState = "running";
  document.getElementById("third").style.animationPlayState = "running";
  document.getElementById("fourth").style.animationPlayState = "running";
  document.getElementById("fifth").style.animationPlayState = "running";
  document.getElementById("sixth").style.animationPlayState = "running";
  document.getElementById("seventh").style.animationPlayState = "running";
  document.getElementById("eigth").style.animationPlayState = "running";
  document.getElementById("ninth").style.animationPlayState = "running";
 
  
}
  const moveFinger = () => {
    document.getElementById("personalHome").style.transform = "translateY(0) scale(100%)";
    document.getElementById("buchMitLicht").style.transform = "translateY(-400px) translateX(-100px) scale(500%)";
    document.getElementById("buchMitLicht").style.transition = "transform 1s 0.5s ease-in-out";
  }

  onmouseover="lightTopicOn()" onmouseout="lightTopicOff()"
   /*  document.getElementById("personalData").onmouseover = function () {
    this.style.color = "white";
    document.getElementById("first").style.opacity = "1"; 
    document.getElementById("first").style.animationPlayState = "none";
  } 
  
  document.getElementById("personalData").onmouseout = function () {
    this.style.color = "black";
    document.getElementById("first").style.color = "white"; 
    document.getElementById("first").style.animationPlayState = "none";
  }*/
