// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff=null;
let flightStatus=null;
let shuttleBackground=null;
let shuttleAltitudeObject = null;
let land=null;
let abort=null
let rocket=null
let leftMovement=220;
let bottomMovement=0;
let shuttleHasBeenLaunched = false;

function varInit(){
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById
    ("shuttleBackground");
    shuttleAltitudeObject = document.getElementById("spaceShuttleHeight");
    shuttleAltitude=Number(shuttleAltitudeObject.innerHTML)
    console.log ('window loaded');
    land = document.getElementById("landing");
    abort= document.getElementById("missionAbort");
    rocket= document.getElementById('rocket');
    rightButton=document.getElementById('right');
    leftButton=document.getElementById('left');
    upButton=document.getElementById('up');
    downButton=document.getElementById('down');
    takeoff.addEventListener('click', launchShuttle);
    land.addEventListener('click', landShuttle);
    abort.addEventListener('click',abortMission);
    rightButton.addEventListener('click', moveRight);
    leftButton.addEventListener('click', moveLeft);
    upButton.addEventListener('click', moveUp);
    downButton.addEventListener('click', moveDown);
};

varInit();

function launchShuttle(){
    if (shuttleHasBeenLaunched!==true){
        if (flightStatus.innerHTML==="Mission Aborted"){
            let abortReset=confirm("Previouis mission aborted, system reset recommended before takeoff");
            if (abortReset===true){
                alert('Systems reset confirmed.  Please enjoy your flight');
            } else{
                alert("Okay Commander, whatever you say.  It's your ship.");
            }
        }
            if (window.confirm("Confirm that the shuttle is ready for takeoff.")===true){
                shuttleHasBeenLaunched=true;
                flightStatus.innerHTML="Shuttle in flight";
                shuttleBackground.style.backgroundColor = "blue";
                for (let i=0; i<10; i++){
                 moveUp();
                }
                shuttleAltitudeObject.innerHTML=shuttleAltitude;
            } else {
                alert("Shuttle launch sequence aborted");
            }
             } else {
        alert("Shuttle is already in flight");
            }  
          
};

function landShuttle(){
    if (shuttleHasBeenLaunched!==false){
    alert("The shuttle is landing.  Landing gear engaged.");
    flightStatus.innerHTML="The shuttle has landed.";
    shuttleBackground.style.backgroundColor= "green";
    shuttleAltitude=0;
    shuttleAltitudeObject.innerHTML=shuttleAltitude;
    bottomMovement=0;
    leftMovement=220;
    rocket.style.left=leftMovement+"px";
    rocket.style.bottom=bottomMovement+"px";
    shuttleHasBeenLaunched=false;
    } else {
        alert('Shuttle already on landing pad');
    }
}

function abortMission(){
    if (shuttleHasBeenLaunched===false){
        alert('Mission has not been started.  At least launch before you give up');
    } else {
        if(window.confirm("Confirm that you want to abort the mission")===true){
        flightStatus.innerHTML="Mission Aborted";
        shuttleBackground.style.backgroundColor="green";
        shuttleAltitude=0;
        shuttleAltitudeObject.innerHTML=shuttleAltitude;
        bottomMovement=0;
        leftMovement=220;
        rocket.style.left=leftMovement+"px";
        rocket.style.bottom=bottomMovement+"px";
        shuttleHasBeenLaunched=false;
        } else {
            alert("Very well, ever onward!");
        }
    }
}

function moveRight(){
    if (leftMovement>=470){
        alert('WARNING! Exceeding operational communications range');
    } else {
    if (shuttleHasBeenLaunched===true){
    leftMovement=leftMovement+10;
    rocket.style.left = leftMovement+"px";
    console.log (leftMovement,bottomMovement);
    } else {
        alert("Manuvering thrusters not engaged while shuttle has not been launched");
    }
}
}

function moveLeft(){
    if (leftMovement<=0&&shuttleHasBeenLaunched===true){
        alert('WARNING! Exceeding operational communications range');
    } else {
         if (shuttleHasBeenLaunched===true){
         leftMovement=leftMovement-10;
         rocket.style.left = leftMovement+"px";
          console.log (leftMovement,bottomMovement);
          } else {
        alert("Manuvering thrusters not engaged while shuttle has not been launched");
         }
    }
}

function moveUp(){
    if (bottomMovement>=250){
        alert('DANGER! Altitude exceeding operational safety limits');
    }else{
         if (shuttleHasBeenLaunched===true){
             bottomMovement=bottomMovement+10;
             shuttleAltitude+=10000;
              shuttleAltitudeObject.innerHTML=shuttleAltitude;
             rocket.style.bottom = bottomMovement+"px";
             console.log (leftMovement,bottomMovement);
             } else {
            alert("Manuvering thrusters not engaged while shuttle has not been launched");
            }
    }
}

function moveDown(){
    if (bottomMovement<=0&&shuttleHasBeenLaunched===true){
        alert('DANGER! Altitude too low, crash imminent');
    } else {
         if (shuttleHasBeenLaunched===true){
         bottomMovement=bottomMovement-10;
          shuttleAltitude-=10000;
          shuttleAltitudeObject.innerHTML=shuttleAltitude;
          rocket.style.bottom = bottomMovement+"px";
          console.log (leftMovement,bottomMovement);
          } else {
          alert("Manuvering thrusters not engaged while shuttle has not been launched");
         }
    }
}
