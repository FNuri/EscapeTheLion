let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let numClosedDoors= 3;
let openDoor1;
let openDoor2;
let openDoor3;
let startButton = document.getElementById("start");
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

const isLion = (door) => {
  if(door.src === lionDoorPath){
    return true;
  }
  else {return false;}
}
const isClicked = (door) => {
  if(door.src ===closedDoorPath){
    return false;
  }
  else {return true;}
}
const playDoor = (door) => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }
  else if(isLion(door)==true){
    gameOver();
  }
}
const randomeScapeLionGenerator = () => {
  let escapeLion = Math.floor(Math.random() * numClosedDoors);
  if(escapeLion === 1){
     openDoor1 = lionDoorPath;
     openDoor2 = blueDoorPath;
     openDoor3 = brownDoorPath;
     }
  else if(escapeLion === 2){
     openDoor2 = lionDoorPath;
     openDoor1 = blueDoorPath;
     openDoor3 = brownDoorPath;
     }
   else if(escapeLion === 3){
     openDoor3 = lionDoorPath;
     openDoor1 = blueDoorPath;
     openDoor2 = brownDoorPath;
     }
}
let lionDoorPath = 'https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=113&w=210';
let blueDoorPath = 'https://images.pexels.com/photos/2929910/pexels-photo-2929910.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=205&w=57';
let brownDoorPath = 'https://images.pexels.com/photos/1544420/pexels-photo-1544420.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=205&w=57';
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage1)){
      doorImage1.src = openDoor1;
  }
  playDoor(door1);
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage2)){
     doorImage2.src = openDoor2;
  }
 playDoor(door2);
}
door3.onclick = () => {
  if(currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
  }
  playDoor(door3);
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomescapeLionGenerator();
}

 startButton.onclick = () => {
 if(!currentlyPlaying){   
  startRound();
  }
}
const gameOver = (status) => {
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else { startButton.innerHTML = 'Game over! Play     again?';
       }
 currentlyPlaying = false;
}
startRound();


