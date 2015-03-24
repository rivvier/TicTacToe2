var imageName="";

var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}


function position(name) {
	this.name = name;
	this.clickedBy = 0;
}

var positions = [new position("pos0"), 
				new position("pos1"), 
				new position("pos2"), 
				new position("pos3"), 
				new position("pos4"), 
				new position("pos5"), 
				new position("pos6"), 
				new position("pos7"), 
				new position("pos8")];
var turn = 1;

var alreadyClickedPositions = 0;

function checkPosition(index) {
	posClicked = positions[index];
	if (posClicked.clickedBy == 0){
		var posImg = document.getElementById("box"+ index);
		if (turn%2 == 1){
			posImg.src = "x.png";
			posClicked.clickedBy = 1;
		}
		else {
			posImg.src = "o.png";
			posClicked.clickedBy = 2;	
		}
		turn++;
		alreadyClickedPositions++;

		detectWin(index);
		
	}
}

function clearBoard() {
	
	for(var i=0; i < 9; i++) {
		var posImg = document.getElementById("pos" + i);
		posImg.src = "blank.png";
		positions[i].clickedBy = 0;
	}
	turn = 1;
}


function detectWin(lastClick) {

	// Get last position clicked
	var posClicked = positions[lastClick];

	// Check for horizontal lines
	if (positions[0].clickedBy == positions[1].clickedBy && positions[1].clickedBy == positions[2].clickedBy
		&& (posClicked.name == positions[0].name || posClicked.name == positions[1].name || posClicked.name == positions[2].name)) {

		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	else if (positions[3].clickedBy == positions[4].clickedBy && positions[4].clickedBy == positions[5].clickedBy
		&& (posClicked.name == positions[3].name || posClicked.name == positions[4].name || posClicked.name == positions[5].name)) {

		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	else if (positions[6].clickedBy == positions[7].clickedBy && positions[7].clickedBy == positions[8].clickedBy
		&& (posClicked.name == positions[6].name || posClicked.name == positions[7].name || posClicked.name == positions[8].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	// Check for vertical lines
	else if (positions[0].clickedBy == positions[3].clickedBy && positions[3].clickedBy == positions[6].clickedBy
		&& (posClicked.name == positions[0].name || posClicked.name == positions[3].name || posClicked.name == positions[6].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	else if (positions[1].clickedBy == positions[4].clickedBy && positions[4].clickedBy == positions[7].clickedBy
		&& (posClicked.name == positions[1].name || posClicked.name == positions[4].name || posClicked.name == positions[7].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	else if (positions[2].clickedBy == positions[5].clickedBy && positions[5].clickedBy == positions[8].clickedBy
		&& (posClicked.name == positions[2].name || posClicked.name == positions[5].name || posClicked.name == positions[8].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	// Check for diagonal lines
	else if (positions[0].clickedBy == positions[4].clickedBy && positions[4].clickedBy == positions[8].clickedBy
		&& (posClicked.name == positions[0].name || posClicked.name == positions[4].name || posClicked.name == positions[8].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!"); 
	}

	else if (positions[2].clickedBy == positions[4].clickedBy && positions[4].clickedBy == positions[6].clickedBy
		&& (posClicked.name == positions[2].name || posClicked.name == positions[4].name || posClicked.name == positions[6].name)) {
		alert("Player " + positions[lastClick].clickedBy + " won!");
	}

	// Check if board is full and nobody won

	else {
		// var isBoardFull = true;
		// for (var i = 0; i < 9; i++) {
		// 	if (positions[i].clickedBy == 0) {
		// 		isBoardFull = false;
		// 	}
		// }
		// if (isBoardFull) {
		// 	alert("Game Over! No one's good enough to win...");
		// }
		
		if (alreadyClickedPositions == 9) {
			alert("Game Over! No one's good enough to win...");
		}

	}
}

function changePhoto(name) {
	imageName = name;
	//alert('Changing Photo');
	// Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById(imageName);

      // Unhide image elements
      //
      //smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;}