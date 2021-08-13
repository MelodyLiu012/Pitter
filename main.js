const welcomeWindow = document.getElementById("welcome");
const closeButton = document.getElementById("close");
const rainAudio = document.getElementById("rain");

welcomeWindow.style.opacity = 1;

var closeButtonClicked = false;

closeButton.onclick = () => {
  welcomeWindow.style.opacity = 0;
  closeButtonClicked = true;
  rainAudio.play();
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
menuWindow.addEventListener('transitionend', () => {
  if (menuButtonClicked) menuWindow.style.zIndex = 0;
});


const radioP = document.getElementById("radioP");
var radioPlayer = document.getElementById("radioPlayer");

var radioClicked = false;

radioP.onclick = () => {
  if (!radioClicked)
  {
    radioPlayer.play();
    radioClicked = true;
  }
  else
  {
    radioPlayer.pause();
    radioClicked = false;
  }
}

const playList = 
  [
    "piana - Norway.mp3", 
    "Makoto Tanaka - anoko to anoco.mp3",
    "Choro Club - Kujira no Hirune.mp3",
    "GIRakaCHEEZER - Garden.mp3"
  ];
var songIndex = 1;

radioPlayer.addEventListener('ended', function(){
  radioPlayer.pause();

  if (songIndex > playList.length - 1) 
  {
    songIndex = 0;
  }
  radioPlayer.src = "assets/music/" + playList[songIndex];
  songIndex++;

  radioPlayer.load();
  radioPlayer.play();
});