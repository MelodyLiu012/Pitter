
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


// Uncomment either above or below this line, not both


// var tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// function onPlayerReady(event) {
//   // event.target.playVideo();
// }

// // This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     events: {
//       'onReady': onPlayerReady,
//       // 'onStateChange': onPlayerStateChange
//     }
//   });
// }

// const radioP = document.getElementById("radioP");
// var radioPlayer = document.getElementById("radioPlayer");

// var radioClicked = false;

// radioP.onclick = () => {
//   if (!radioClicked)
//   {
//     player.playVideo();
//     radioClicked = true;
//   }
//   else
//   {
//     player.pauseVideo();
//     radioClicked = false;
//   }
// }


