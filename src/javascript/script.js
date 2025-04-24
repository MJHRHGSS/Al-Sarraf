var i = 0;
var txt = 'Web development ';
var speed = 150;
var delSpeed = 50;
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

//----------------------------------------------------

function copy() {
  navigator.clipboard.writeText(document.getElementById("myNum").innerHTML)
}