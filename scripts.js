// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff=null;
let flightStatus=null;

function varInit(){
    takeOff = document.getElementById("takeoff");
    flightStatus = document.getElementById("flightStatus");
    console.log (takeOff);
    console.log (flightStatus);
    console.log ('window loaded');
}

takeOff.addEventListener('click', function(){
            flightStatus.innerHTML="Shuttle in flight";
            });


