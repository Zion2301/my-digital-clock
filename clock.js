// the program


function myclock() {
    let rightnow = new Date(); //gets the date based on ur local time
let hours = rightnow.getHours().toString().padStart(2, 0); // what this does is to fill any 2nd empty space with the number 0;
let minutes = rightnow.getMinutes().toString().padStart(2, 0);
let seconds = rightnow.getSeconds().toString().padStart(2, 0); // all these get hours, seconds and minutes based on ur local time
let thetimestring = `${hours}:${minutes}:${seconds}`; //makes the clock adjust in this specific format
document.getElementById("clock").textContent = thetimestring;
}

myclock();
setInterval(myclock, 1000);  // this set interval calls back a function as often as u declare it, where the first argument is the function and the 2nd is the time in ms thatneeds to pass before it is to be called again