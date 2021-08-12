const welcomeWindow = document.getElementById("welcome");
const closeButton = document.getElementById("close");

welcomeWindow.style.opacity = 1;

var closeButtonClicked = false;

closeButton.onclick = () => {
  welcomeWindow.style.opacity = 0;
  closeButtonClicked = true;
}
welcomeWindow.addEventListener('transitionend', () => {
  if (closeButtonClicked) welcomeWindow.style.zIndex = 0;
});


var notebookP = document.getElementById("notebookP");
var notebook = document.getElementById("notebook");

var room = document.getElementById("room");

var notebookClicked = false;

notebookP.onclick = () => {
  if (!notebookClicked)
  {
    room.style.right = "0%";
    notebook.style.top = "0%";
    
    notebookClicked = true;
  }
  else
  {
    room.style.right = "auto";
    notebook.style.top = "-100%";
    notebookClicked = false;
  }
}

const loadingScreen = document.getElementById("loading");
const rainAudio = document.getElementById("rain");

window.addEventListener("load", event => {
  var roomGIF = document.getElementById("roomP");
  var isLoaded = roomGIF.complete && roomGIF.naturalHeight !== 0;
  console.log(isLoaded);
  loadingScreen.style.opacity = 0;
  loadingScreen.style.zIndex = 0;
  rainAudio.play();
});


const menuWindow = document.getElementById("menu");
const menuButton = document.getElementById("threeDots");

var menuButtonClicked = false;

menuWindow.style.opacity = "0%";

menuButton.onclick = () => {
  if (!menuButtonClicked)
  {
    menuWindow.style.opacity = "100%";
    menuButtonClicked = true;
  }
  else
  {
    menuWindow.style.opacity = "0%";
    menuButtonClicked = false;
  }
}
// welcomeWindow.addEventListener('transitionend', () => {
//   if (closeButtonClicked) welcomeWindow.style.zIndex = 0;
// });