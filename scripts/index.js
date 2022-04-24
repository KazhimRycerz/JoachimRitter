function lightTopicOn() {
  document.getElementsByClassName("personalData").style.color = "white";
  document.getElementById("first").style.animationPlayState = "paused";
  document.getElementById("second").style.animationPlayState = "none";
  document.getElementById("third").style.animationPlayState = "none";
  document.getElementById("fourth").style.animationPlayState = "none";
  document.getElementById("fifth").style.animationPlayState = "none";
  document.getElementById("sixth").style.animationPlayState = "none";
  document.getElementById("seventh").style.animationPlayState = "none";
  document.getElementById("eigeht").style.animationPlayState = "none";
  document.getElementById("ninth").style.animationPlayState = "none";
  document.getElementById("first").style.animationPlayState = "none";
  document.getElementById("first").style.opacity = "1";
}

function lightTopicOff() {
  document.getElementsByClassName("personalData").style.color = "black";
  document.getElementById("first").style.animationPlayState = "running";
  
}
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
