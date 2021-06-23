"use strict";

// Variables
const shape = document.querySelector("#shape");
const color = document.querySelector("#color");
const bigger = document.querySelector("#bigger");
const smaller = document.querySelector("#smaller");
const coord = document.querySelector("#coord");

const shapes = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "triangle",
  "trapezoid",
  "parallelogram",
  "star",
  "pentagon",
  "diamond",
  "shield",
  "cut",
  "egg",
  "pacman",
];

let cur_color = "rgb(0, 0, 0)";
let cur_shape = shapes[13];

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
    // Change shape
    let cur = shapes.indexOf(cur_shape);

    if (cur < 13) {
      cur += 1;
    } else {
      cur = 0;
    }

    cur_shape = shapes[cur];
    shape.innerHTML = `Q - ${cur_shape}`;
  } else if (event.code == "KeyW") {
    // Change Color
    cur_color = random_color();
    color.innerHTML = `W - ${cur_color}`;
  } else if (event.code == "KeyE") {
    console.log("Bigger");
  } else if (event.code == "KeyR") {
    console.log(`Smaller`);
  } else {
    console.log(event);
  }
});
