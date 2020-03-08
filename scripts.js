// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff=null;
let flightStatus=null;
let shuttleBackground=null;
let shuttleAltitudeObject = null;
let land=null;
let abort=null
let rocket=null
let leftMovement=0;
let bottomMovement=0;

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
};

function launchShuttle(){
            if (window.confirm("Confirm that the shuttle is ready for takeoff.")===true){
                flightStatus.innerHTML="Shuttle in flight";
                shuttleBackground.style.backgroundColor = "blue";
                shuttleAltitude+=10000;
                shuttleAltitudeObject.innerHTML=shuttleAltitude;
            }
};

function landShuttle(){
    alert("The shuttle is landing.  Landing gear engaged.");
    flightStatus.innerHTML="The shuttle has landed.";
    shuttleBackground.style.backgroundColor= "green";
    shuttleAltitude=0;
    shuttleAltitudeObject.innerHTML=shuttleAltitude;
}

function abortMission(){
    if(window.confirm("Confirm that you want to abort the mission")===true){
        flightStatus.innerHTML="Mission Aborted";
        shuttleBackground.style.backgroundColor="green";
        shuttleAltitude=0;
        shuttleAltitudeObject.innerHTML=shuttleAltitude;
    }
}

function moveRight(){
    leftMovement=leftMovement+10;
    rocket.style.left = leftMovement+"px";
}

function moveLeft(){
    leftMovement=leftMovement-10;
    rocket.style.left = leftMovement+"px";
}

function moveUp(){
    bottomMovement=bottomMovement+10;
    shuttleAltitude+=10000;
    shuttleAltitudeObject.innerHTML=shuttleAltitude;
    rocket.style.bottom = bottomMovement+"px";
}

function moveDown(){
    bottomMovement=bottomMovement-10;
    shuttleAltitude-=10000;
    shuttleAltitudeObject.innerHTML=shuttleAltitude;
    rocket.style.bottom = bottomMovement+"px";
}
