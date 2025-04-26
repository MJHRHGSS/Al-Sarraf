// Variables

let i = 0;
let txt = "Web development ";
let speed = 150;
let delSpeed = 50;
let screenType = null;

getScreenType();

// Functions

function copyN() {
  navigator.clipboard.writeText(document.getElementById("myNum").innerHTML);
  alert("Copied to clipboard");
}
function copyE() {
  navigator.clipboard.writeText(document.getElementById("myMail").innerHTML);
  alert("Copied to clipboard");
}

function getScreenType() {
  if (window.innerWidth <= 760) {
    alert("This website is better with larger width, please rotate your device or use a larger screen.");
    window.location.href = "./mobile.html";
  }
}

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("change").innerHTML += txt.charAt(i);
    i++;
      setTimeout(typeWriter, speed);
    } else if (i == txt.length) {
      setTimeout(deleteTXT, 500);
    }
  }
function deleteTXT() {
  if (i > 0) {
    document.getElementById("change").innerHTML = txt.substring(0, i-1);
    i--;
      setTimeout(deleteTXT, delSpeed);
    } else if (i == 0) {
        if (txt == "Web development ") {
            txt = "Game development ";
            i = 0;
            setTimeout(typeWriter, speed);
        } else if (txt == "Game development ") {
            txt = "Discord bots ";
            i = 0;
            setTimeout(typeWriter, speed);
        } else if (txt == "Discord bots ") {
            txt = "Back-end development ";
            i = 0;
            setTimeout(typeWriter, speed);
        } else {
            txt = "Web development ";
            i = 0;
            setTimeout(typeWriter, speed);
        }
    }
  }
setTimeout(typeWriter, speed);