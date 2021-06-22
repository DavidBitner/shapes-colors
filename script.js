"use strict";

// Variables
const shape = document.querySelector("#shape");
const color = document.querySelector("#color");
const bigger = document.querySelector("#bigger");
const smaller = document.querySelector("#smaller");

const coord = document.querySelector("#coord");

// Show coordinates
document.addEventListener("mousemove", function (event) {
  let x = event.clientX;
  let y = event.clientY;

  coord.innerHTML = `${x}   ${y}`;
});

// Random Number
function rand_int(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// Random Color
function random_color() {
  let r = rand_int(0, 255);
  let g = rand_int(0, 255);
  let b = rand_int(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// Keyboard Events
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    console.log("Shape");
  } else if (event.code == "KeyW") {
    console.log("Color");
  } else if (event.code == "KeyE") {
    console.log("Bigger");
  } else if (event.code == "KeyR") {
    console.log(`Smaller`);
  } else {
    console.log(event);
  }
});
