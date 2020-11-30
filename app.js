var beginning = true;
var startPressed = false;

var body = document.getElementsByTagName('body')[0];
// var windowsGif = document.createElement("img");
body.className = "windows-gif";
var windowsSound = document.createElement("audio");
windowsSound.src = "resources/windowssound.mp3";
windowsSound.autoplay = "true";
// var windowsBg = document.createElement("div");
// windowsBg.className = windowsGif;
// body.appendChild(windowsBg);



//shutdown 
// var shutdownGif = document.createElement("img");
var shutdownSound = document.createElement("audio");
shutdownSound.src = "resources/windowsshutdownsound.mp3";
shutdownSound.autoplay = "true";

//background div
var background = document.createElement("div");
background.className = "background";
var gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
var iconsGrid = document.createElement("div");
iconsGrid.className = "icons-grid";
var icon1 = document.createElement("img");
icon1.className = "icon";
icon1.src = "resources/sanicon2.png";
var icon2 = document.createElement("img");
icon2.className = "icon";
icon2.src = "resources/nfsicon2.png";
var icon3 = document.createElement("img");
icon3.className = "icon";
icon3.src = "resources/aoeicon2.png";
var icon4 = document.createElement("img");
icon4.className = "icon";
icon4.src = "resources/zumaicon3.png";
var icon5 = document.createElement("img");
icon5.className = "icon";
icon5.src = "resources/fifaicon.png";
iconsGrid.appendChild(icon1);
iconsGrid.appendChild(icon2);
iconsGrid.appendChild(icon3);
iconsGrid.appendChild(icon4);
iconsGrid.appendChild(icon5);
gridContainer.appendChild(iconsGrid);
background.appendChild(gridContainer);
var icons = [icon1, icon2, icon3, icon4, icon5];

background.addEventListener("click", () => {
	icons[0].className = 'icon';
	icons[1].className = 'icon';
	icons[2].className = 'icon';
	icons[3].className = 'icon';
	icons[4].className = 'icon';

	if(startPressed) {	
		body.removeChild(menuDiv);
		startPressed = false;
	}
});


//tab div
var tab = document.createElement("div");
tab.className = "row tab"
tab.style = "margin: 0;"
var start = document.createElement("div");
start.className = "col-1 start";
var bar = document.createElement("div");
bar.className = "col-10 bar";
var timeDiv = document.createElement("div");
timeDiv.className = "col-1 time-div";
var time = document.createElement("div");
time.className = "time";
timeDiv.appendChild(time);
tab.appendChild(start);
tab.appendChild(bar);
tab.appendChild(timeDiv);

start.addEventListener("click", () => {
	body.appendChild(menuDiv);
	startPressed = true;
});

//start menu
var menuDiv = document.createElement("div");
menuDiv.className = "menu-div";
var upperMenu = document.createElement("div");
upperMenu.className = "upper-menu";
var menuBar = document.createElement("div");
menuBar.className = "menu-bar";
var startMenuLeft = document.createElement("div");
startMenuLeft.className = "start-menu-left";
var startMenuRight = document.createElement("div");
startMenuRight.className = "start-menu-right";
menuBar.appendChild(startMenuLeft);
menuBar.appendChild(startMenuRight);
menuDiv.appendChild(upperMenu);
menuDiv.appendChild(menuBar);

startMenuRight.addEventListener("click", () => {
	body.className = "shutdown-gif";
	shutdownSound.play();
	body.removeChild(background);
	body.removeChild(tab);
	setTimeout(() => {
		body.className = "black-screen";
	}, 2000);
});


var objects = [
	{
		icon: icons[0],
		offsetX: 0,
		offsetY: 0
	},
	{
		icon: icons[1],
		offsetX: 0,
		offsetY: 0
	},
	{
		icon: icons[2],
		offsetX: 0,
		offsetY: 0
	},
	{
		icon: icons[3],
		offsetX: 0,
		offsetY: 0
	},
	{
		icon: icons[4],
		offsetX: 0,
		offsetY: 0
	}
]

function getIconObject(icon) {
	if(icon == objects[0].icon) {return objects[0]}
	else if(icon == objects[1].icon) {return objects[1]}
	else if(icon == objects[2].icon) {return objects[2]}
	else if(icon == objects[3].icon) {return objects[3]}
	if(icon == objects[4].icon) {return objects[4]}
}

//Make the icons draggable
for(i = 0; i < 5; i++) {
	icons[i].addEventListener("touchstart", dragStart2, false);
    icons[i].addEventListener("touchend", dragEnd2, false);
    icons[i].addEventListener("touchmove", drag2, false);
    icons[i].addEventListener("mousedown", dragStart2, false);
    icons[i].addEventListener("mouseup", dragEnd2, false);
	icons[i].addEventListener("mousemove", drag2, false);
}

//When the icons are double clicked, open the respective game window
icons[0].addEventListener('dblclick', () => {
	//put game in bar
	bar.appendChild(gtaBarDiv);

	//play audio
	gtaAudio.play();
	
	icons[0].className = 'selected-icon';
	gtaGameWindow.className = 'gta-window';
	gridContainer.appendChild(gtaGameWindow);
	
	dragItem = document.getElementsByClassName("window-bar")[0];
	dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);
    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
	dragItem.addEventListener("mousemove", drag, false);
	container = document.getElementsByClassName("gta-window")[0];
});

icons[1].addEventListener('dblclick', () => {
	//put agme in bar
	bar.appendChild(nfsBarDiv);

	//play audio
	nfsAudio.play();
	icons[1].className = 'selected-icon';
	nfsGameWindow.className = 'nfs-window';
	gridContainer.appendChild(nfsGameWindow);
	
	dragItem = document.getElementsByClassName("window-bar")[0];
	dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);
    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
	dragItem.addEventListener("mousemove", drag, false);
	container = document.getElementsByClassName("nfs-window")[0];
});
icons[2].addEventListener('dblclick', () => {
	//put game in bar
	bar.appendChild(aoeBarDiv);

	//play audio
	aoeAudio.play();

	icons[2].className = 'selected-icon';
	aoeGameWindow.className = 'aoe-window';
	gridContainer.appendChild(aoeGameWindow);
	
	dragItem = document.getElementsByClassName("window-bar")[0];
	dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);
    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
	dragItem.addEventListener("mousemove", drag, false);
	container = document.getElementsByClassName("aoe-window")[0];
});
icons[3].addEventListener('dblclick', () => {
	//put game in bar
	bar.appendChild(zumaBarDiv);
	
	//play audio
	zumaAudio.play();

	icons[3].className = 'selected-icon';
	zumaGameWindow.className = 'zuma-window';
	gridContainer.appendChild(zumaGameWindow);
	
	dragItem = document.getElementsByClassName("window-bar")[0];
	dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);
    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
	dragItem.addEventListener("mousemove", drag, false);
	container = document.getElementsByClassName("zuma-window")[0];
});
icons[4].addEventListener('dblclick', () => {
	//put game in bar
	bar.appendChild(fifaBarDiv);

	//play audio
	fifaAudio.play();

	icons[4].className = 'selected-icon';
	fifaGameWindow.className = 'fifa-window';
	gridContainer.appendChild(fifaGameWindow);
	
	dragItem = document.getElementsByClassName("window-bar")[0];
	dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);
    dragItem.addEventListener("mousedown", dragStart, false);
    dragItem.addEventListener("mouseup", dragEnd, false);
	dragItem.addEventListener("mousemove", drag, false);
	container = document.getElementsByClassName("fifa-window")[0];
});

body.addEventListener('click', () => {
	if(beginning) {
		windowsSound.play();
		body.appendChild(background);
		body.appendChild(tab);
		body.className = "";
		beginning = false;
	}
});

//GTA
//create the window node for GTA
let gtaGameWindow = document.createElement('div');
let gtaWindowBar = document.createElement('div');
gtaWindowBar.className = 'window-bar';
let gtaInfoButton = document.createElement('button');
gtaInfoButton.textContent = 'i';
let gtaExitButton = document.createElement('button');
gtaExitButton.textContent = 'X';
gtaExitButton.style = 'background-color: red';
//append the buttons
gtaWindowBar.appendChild(gtaInfoButton);
gtaWindowBar.appendChild(gtaExitButton);
//append the window bar
gtaGameWindow.appendChild(gtaWindowBar);
//elements for the info text
let gtaTextDiv = document.createElement('div');
gtaTextDiv.className = 'gta-div';
gtaTextDiv.innerHTML =
	"<h2>About</h2><p>Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games.</p> <h2>Gameplay</h2> <p>The player assumes the role of CJ, a veteran member of the Grove Street Families gang based in Los Santos where he returns to attend the funeral of his mother who died in a drive by shooting by a rival gang. CJ reunites with Big Smoke, Sweet, Kendl and Ryder and starts working with them to restore their gang's power.</p> ";
//Text link to the iframe video
let gtaVideoLink = document.createElement("p");
gtaVideoLink.className = "video-text-on-hover";
gtaVideoLink.innerText = "->Watch the game play";
gtaTextDiv.appendChild(gtaVideoLink);
//iframe element
let gtaVideo = document.createElement('iframe');
gtaVideo.setAttribute('src', 'https://www.youtube.com/embed/OpTizzox2Qo');
//audio
var gtaAudio = document.createElement('audio');
gtaAudio.src = "resources/gtamusic.mp3";
gtaAudio.autoplay = "true";
//gta bar icon
var gtaBarDiv = document.createElement("div");
gtaBarDiv.className = "gta-bar-div";
var gtaBarIcon = document.createElement("img");
gtaBarIcon.className = "gta-bar-icon"
gtaBarIcon.src = "resources/gtabaricon.png"
var gtaBarText = document.createElement("p");
gtaBarText.className = "gta-bar-text"
gtaBarText.innerText = "GTA San Andreas"
gtaBarDiv.appendChild(gtaBarIcon);
gtaBarDiv.appendChild(gtaBarText);

//When X button is clicked the window closes
gtaExitButton.addEventListener('click', () => {
	if(gtaGameWindow.getElementsByClassName("gta-div")[0])
		gtaGameWindow.removeChild(gtaTextDiv);
	if(gtaGameWindow.getElementsByTagName("iframe")[0])
		gtaGameWindow.removeChild(gtaVideo);
	gridContainer.removeChild(gtaGameWindow);
	gtaAudio.pause()
	gtaAudio.currentTime = 0;
	//remove game from bar
	bar.removeChild(gtaBarDiv);
});
//When the info button is clicked display the info
gtaInfoButton.addEventListener('click', () => {
	gtaGameWindow.className = 'gta-info';
	gtaGameWindow.appendChild(gtaTextDiv);
});
//When the video link text is clicked show the youtube video
gtaVideoLink.addEventListener('click', () => {
	gtaGameWindow.removeChild(gtaTextDiv);
	gtaGameWindow.appendChild(gtaVideo);
	gtaAudio.pause()
	gtaAudio.currentTime = 0;
});



//NFS
//create the window node for nfs
let nfsGameWindow = document.createElement('div');
let nfsWindowBar = document.createElement('div');
nfsWindowBar.className = 'window-bar';
let nfsInfoButton = document.createElement('button');
nfsInfoButton.textContent = 'i';
let nfsExitButton = document.createElement('button');
nfsExitButton.textContent = 'X';
nfsExitButton.style = 'background-color: red';
//append the buttons
nfsWindowBar.appendChild(nfsInfoButton);
nfsWindowBar.appendChild(nfsExitButton);
//append the window bar
nfsGameWindow.appendChild(nfsWindowBar);
//elements for the info text
let nfsTextDiv = document.createElement('div');
nfsTextDiv.className = 'nfs-div';
nfsTextDiv.innerHTML =
	'<h2>About</h2><p>Need for Speed: Most Wanted is a 2005 open world racing video game, and the ninth installment in the Need for Speed series</p><h2>Gameplay</h2><p>The game begins with the player taking part in a sprint race against Clarence "Razor" Callahan, in order to take his #15 spot on the blacklist. His car is sabbotaged By Razor thus he loses the race and concedes his car to him, then gets arrested after everyone involved in the race flees. He gets help from a friend and manages to buy a new car which he uses to climb up the blacklist and regain his car after beating Razor in a race for the #1 spot on the blacklist.</p></p>';

//Text link to the iframe video
let nfsVideoLink = document.createElement("p");
nfsVideoLink.className = "video-text-on-hover";
nfsVideoLink.innerText = "->Watch the game play";
nfsTextDiv.appendChild(nfsVideoLink);
//iframe element
let nfsVideo = document.createElement('iframe');
nfsVideo.setAttribute('src', 'https://www.youtube.com/embed/JdkZaxGD4tY');
//audio
var nfsAudio = document.createElement('audio');
nfsAudio.src = "resources/nfsmusic.mp3";
nfsAudio.autoplay = "true";
//nfs bar icon
var nfsBarDiv = document.createElement("div");
nfsBarDiv.className = "nfs-bar-div";
var nfsBarIcon = document.createElement("img");
nfsBarIcon.className = "nfs-bar-icon"
nfsBarIcon.src = "resources/nfsbaricon.png"
var nfsBarText = document.createElement("p");
nfsBarText.className = "nfs-bar-text"
nfsBarText.innerText = "NFS Most Wanted"
nfsBarDiv.appendChild(nfsBarIcon);
nfsBarDiv.appendChild(nfsBarText);

//When X button is clicked the window closes
nfsExitButton.addEventListener('click', () => {
	if(nfsGameWindow.getElementsByClassName("nfs-div")[0])
		nfsGameWindow.removeChild(nfsTextDiv);
	if(nfsGameWindow.getElementsByTagName("iframe")[0])
		nfsGameWindow.removeChild(nfsVideo);
	gridContainer.removeChild(nfsGameWindow);
	nfsAudio.pause()
	nfsAudio.currentTime = 0;
	//remove game form bar
	bar.removeChild(nfsBarDiv);
});
//When the info button is clicked display the info
nfsInfoButton.addEventListener('click', () => {
	nfsGameWindow.className = 'nfs-info';
	nfsGameWindow.appendChild(nfsTextDiv);
});
//When the video link text is clicked show the youtube video
nfsVideoLink.addEventListener('click', () => {
	nfsGameWindow.removeChild(nfsTextDiv);
	nfsGameWindow.appendChild(nfsVideo);
	nfsAudio.pause()
	nfsAudio.currentTime = 0;
});


//AOE
//create the window node for aoe
let aoeGameWindow = document.createElement('div');
let aoeWindowBar = document.createElement('div');
aoeWindowBar.className = 'window-bar';
let aoeInfoButton = document.createElement('button');
aoeInfoButton.textContent = 'i';
let aoeExitButton = document.createElement('button');
aoeExitButton.textContent = 'X';
aoeExitButton.style = 'background-color: red';
//append the buttons
aoeWindowBar.appendChild(aoeInfoButton);
aoeWindowBar.appendChild(aoeExitButton);
//append the window bar
aoeGameWindow.appendChild(aoeWindowBar);
//elements for the info text
let aoeTextDiv = document.createElement('div');
aoeTextDiv.className = 'aoe-div';
aoeTextDiv.innerHTML =
	'<h2>About</h2><p>Age of Empires (AoE) is a history-based real-time strategy video game developed by Ensemble Studios and published by Microsoft in 1997, and the first game in the Age of Empires series. <h2>Gameplay</h2><p>Age of Empires requires the player to develop a civilization from a handful of hunter-gatherers to an expansive Iron Age Empire. To assure victory, the player must gather resources in order to pay for new units, buildings and more advanced technology. Resources must be preserved, as no new resources become available as the game progresses; for example, trees that are cut down will not grow back.</p> </p>';

//Text link to the iframe video
let aoeVideoLink = document.createElement("p");
aoeVideoLink.className = "video-text-on-hover";
aoeVideoLink.innerText = "->Watch the game play";
aoeTextDiv.appendChild(aoeVideoLink);
//iframe element
let aoeVideo = document.createElement('iframe');
aoeVideo.setAttribute('src', 'https://www.youtube.com/embed/tSZRAlSLQsk');
//audio
var aoeAudio = document.createElement('audio');
aoeAudio.src = "resources/aoemusic.mp3";
aoeAudio.autoplay = "true";
//aoe bar icon
var aoeBarDiv = document.createElement("div");
aoeBarDiv.className = "aoe-bar-div";
var aoeBarIcon = document.createElement("img");
aoeBarIcon.className = "aoe-bar-icon"
aoeBarIcon.src = "resources/aoebaricon.jpg"
var aoeBarText = document.createElement("p");
aoeBarText.className = "aoe-bar-text"
aoeBarText.innerText = "Age of Empires"
aoeBarDiv.appendChild(aoeBarIcon);
aoeBarDiv.appendChild(aoeBarText);


//When X button is clicked the window closes
aoeExitButton.addEventListener('click', () => {
	if(aoeGameWindow.getElementsByClassName("aoe-div")[0])
		aoeGameWindow.removeChild(aoeTextDiv);
	if(aoeGameWindow.getElementsByTagName("iframe")[0])
		aoeGameWindow.removeChild(aoeVideo);
	gridContainer.removeChild(aoeGameWindow);
	aoeAudio.pause()
	aoeAudio.currentTime = 0;
	//remove from bar
	bar.removeChild(aoeBarDiv);
});
//When the info button is clicked display the info
aoeInfoButton.addEventListener('click', () => {
	aoeGameWindow.className = 'aoe-info';
	aoeGameWindow.appendChild(aoeTextDiv);
});
//When the video link text is clicked show the youtube video
aoeVideoLink.addEventListener('click', () => {
	aoeGameWindow.removeChild(aoeTextDiv);
	aoeGameWindow.appendChild(aoeVideo);
	aoeAudio.pause()
	aoeAudio.currentTime = 0;
});



//ZUMA
//create the window node for aoe
let zumaGameWindow = document.createElement('div');
let zumaWindowBar = document.createElement('div');
zumaWindowBar.className = 'window-bar';
let zumaInfoButton = document.createElement('button');
zumaInfoButton.textContent = 'i';
let zumaExitButton = document.createElement('button');
zumaExitButton.textContent = 'X';
zumaExitButton.style = 'background-color: red';
//append the buttons
zumaWindowBar.appendChild(zumaInfoButton);
zumaWindowBar.appendChild(zumaExitButton);
//append the window bar
zumaGameWindow.appendChild(zumaWindowBar);
//elements for the info text
let zumaTextDiv = document.createElement('div');
zumaTextDiv.className = 'zuma-div';
zumaTextDiv.innerHTML =
	'<h2>About</h2><p>Zuma is a tile-matching puzzle video game pusblished by PopCap and released in 2003. <h2>Gameplay</h2><p>The game is set in the Aztec Mexico and the objective of Zuma is to eliminate all of the marbles rolling around the screen along a given path, with other marbles before these marbles reach the yellow skull structure. To prevent the marbles from reaching the skull, the player can fire marbles from the frog mouth to the incoming chain of marbles and eliminate those with the same colors.</p></p>';

//Text link to the iframe video
let zumaVideoLink = document.createElement("p");
zumaVideoLink.className = "video-text-on-hover";
zumaVideoLink.innerText = "->Watch the game play";
zumaTextDiv.appendChild(zumaVideoLink);
//iframe element
let zumaVideo = document.createElement('iframe');
zumaVideo.setAttribute('src', 'https://www.youtube.com/embed/BhQUVBJkfyI');
//audio
var zumaAudio = document.createElement('audio');
zumaAudio.src = "resources/zumamusic.mp3";
zumaAudio.autoplay = "true";
//zuma bar icon
var zumaBarDiv = document.createElement("div");
zumaBarDiv.className = "zuma-bar-div";
var zumaBarIcon = document.createElement("img");
zumaBarIcon.className = "zuma-bar-icon"
zumaBarIcon.src = "resources/zumabaricon.jpeg"
var zumaBarText = document.createElement("p");
zumaBarText.className = "zuma-bar-text"
zumaBarText.innerText = "Zuma Deluxe"
zumaBarDiv.appendChild(zumaBarIcon);
zumaBarDiv.appendChild(zumaBarText);

//When X button is clicked the window closes
zumaExitButton.addEventListener('click', () => {
	if(zumaGameWindow.getElementsByClassName("zuma-div")[0])
		zumaGameWindow.removeChild(zumaTextDiv);
	if(zumaGameWindow.getElementsByTagName("iframe")[0])
		zumaGameWindow.removeChild(zumaVideo);
	gridContainer.removeChild(zumaGameWindow);
	zumaAudio.pause()
	zumaAudio.currentTime = 0;
	bar.removeChild(zumaBarDiv);
});
//When the info button is clicked display the info
zumaInfoButton.addEventListener('click', () => {
	zumaGameWindow.className = 'zuma-info';
	zumaGameWindow.appendChild(zumaTextDiv);
});
//When the video link text is clicked show the youtube video
zumaVideoLink.addEventListener('click', () => {
	zumaGameWindow.removeChild(zumaTextDiv);
	zumaGameWindow.appendChild(zumaVideo);
	zumaAudio.pause()
	zumaAudio.currentTime = 0;
});




//FIFA
//create the window node for aoe
let fifaGameWindow = document.createElement('div');
let fifaWindowBar = document.createElement('div');
fifaWindowBar.className = 'window-bar';
let fifaInfoButton = document.createElement('button');
fifaInfoButton.textContent = 'i';
let fifaExitButton = document.createElement('button');
fifaExitButton.textContent = 'X';
fifaExitButton.style = 'background-color: red';
//append the buttons
fifaWindowBar.appendChild(fifaInfoButton);
fifaWindowBar.appendChild(fifaExitButton);
//append the window bar
fifaGameWindow.appendChild(fifaWindowBar);
//elements for the info text
let fifaTextDiv = document.createElement('div');
fifaTextDiv.className = 'fifa-div';
fifaTextDiv.innerHTML =
	"<h2>About</h2><p>FIFA 08 is the 2007 installment of EA Sports' series of football video games. FIFA 08 includes 621 licensed teams, 43 national teams, with 30 leagues and more than 15,000 licensed players. <h2>Gameplay</h2><p>Whether you want to build your dream squad in FIFA Ultimate Team, lead your favourite club to glory in Career Mode, take the game back to the streets with EA SPORTS VOLTA in FIFA 07, or get bragging rights over a friend in Kick-Off Mode, the FIFA series lets you play The World’s Game your way.</p>";

//Text link to the iframe video
let fifaVideoLink = document.createElement("p");
fifaVideoLink.className = "video-text-on-hover";
fifaVideoLink.innerText = "->Watch the game play";
fifaTextDiv.appendChild(fifaVideoLink);
//iframe element
let fifaVideo = document.createElement('iframe');
fifaVideo.setAttribute('src', 'https://www.youtube.com/embed/KeX3Yp5Ydx8');
//audio
var fifaAudio = document.createElement('audio');
fifaAudio.src = "resources/fifamusic.mp3";
fifaAudio.autoplay = "true";
//fifa bar icon
var fifaBarDiv = document.createElement("div");
fifaBarDiv.className = "fifa-bar-div";
var fifaBarIcon = document.createElement("img");
fifaBarIcon.className = "fifa-bar-icon"
fifaBarIcon.src = "resources/fifabaricon.png"
var fifaBarText = document.createElement("p");
fifaBarText.className = "fifa-bar-text"
fifaBarText.innerText = "FIFA 2008"
fifaBarDiv.appendChild(fifaBarIcon);
fifaBarDiv.appendChild(fifaBarText);

//When X button is clicked the window closes
fifaExitButton.addEventListener('click', () => {
	if(fifaGameWindow.getElementsByClassName("fifa-div")[0])
		fifaGameWindow.removeChild(fifaTextDiv);
	if(fifaGameWindow.getElementsByTagName("iframe")[0])
		fifaGameWindow.removeChild(fifaVideo);
	gridContainer.removeChild(fifaGameWindow);
	fifaAudio.pause()
	fifaAudio.currentTime = 0;
	//remove the game from bar
	bar.removeChild(fifaBarDiv);
});
//When the info button is clicked display the info
fifaInfoButton.addEventListener('click', () => {
	fifaGameWindow.className = 'fifa-info';
	fifaGameWindow.appendChild(fifaTextDiv);
});
fifaVideoLink.addEventListener('click', () => {
	fifaGameWindow.removeChild(fifaTextDiv);
	fifaGameWindow.appendChild(fifaVideo);
	fifaAudio.pause()
	fifaAudio.currentTime = 0;
});


//Drag functionality for game windows
var container = null;
var dragItem = null;
var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;
var dragIcon = null;
var prevDraggedItem = null;

function dragStart(e) {
	if(prevDraggedItem != dragItem) {
		xOffset = 0;
		yOffset = 0;
	}
	
	if (e.type === "touchstart") {
	  initialX = e.touches[0].clientX - xOffset;
	  initialY = e.touches[0].clientY - yOffset;
	} else {
	  initialX = e.clientX - xOffset;
	  initialY = e.clientY - yOffset;
	}

	if (e.target === dragItem) {
	  active = true;
	  prevDraggedItem = dragItem;
	}
}

  function dragEnd(e) {
	initialX = currentX;
	initialY = currentY;

	active = false;
}

  function drag(e) {
	if (active) {
	
	  e.preventDefault();
	
	  if (e.type === "touchmove") {
		currentX = e.touches[0].clientX - initialX;
		currentY = e.touches[0].clientY - initialY;
	  } else {
		currentX = e.clientX - initialX;
		currentY = e.clientY - initialY;
	  }

	  xOffset = currentX;
	  yOffset = currentY;
	  
	  setTranslate(currentX, currentY, container);
	}
}

  function setTranslate(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}


// Drag functionality for icons
var dragItem2 = null;
var active2 = false;
var currentX2;
var currentY2;
var initialX2;
var initialY2;
var xOffset2 = 0;
var yOffset2 = 0;
var prevDraggedItem = null;

function dragStart2(e) {
	dragItem2 = getIconObject(e.target).icon;
	xOffset2 = getIconObject(e.target).offsetX;
	yOffset2 = getIconObject(e.target).offsetY;
	
	if (e.type === "touchstart") {
	  initialX2 = e.touches[0].clientX - xOffset2;
	  initialY2 = e.touches[0].clientY - yOffset2;
	} else {
	  initialX2= e.clientX - xOffset2;
	  initialY2 = e.clientY - yOffset2;
	}

	if (e.target === dragItem2) {
	  active2 = true;
	}
}

  function dragEnd2(e) {
	initialX2 = currentX2;
	initialY2 = currentY2;

	active2 = false;
}

  function drag2(e) {
	if (active2) {
	
	  e.preventDefault();
	
	  if (e.type === "touchmove") {
		currentX2 = e.touches[0].clientX - initialX2;
		currentY2 = e.touches[0].clientY - initialY2;
	  } else {
		currentX2 = e.clientX - initialX2;
		currentY2 = e.clientY - initialY2;
	  }

	  xOffset2 = currentX2;
	  yOffset2 = currentY2;
	  
	  var iconObject = getIconObject(e.target);
	  iconObject.offsetX = xOffset2;
	  iconObject.offsetY = yOffset2;

	  setTranslate2(currentX2, currentY2, dragItem2);
	}
}

  function setTranslate2(xPos, yPos, el) {
	el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

//System time
function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	m = checkTime(m);
	document.getElementsByClassName('time')[0].innerHTML = h + ":" + m;
	var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}

setTimeout(startTime, 5000);