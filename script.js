"use strict";

// Variables
const shape = document.querySelector("#shape");
const color = document.querySelector("#color");
const back = document.querySelector("#back");
const bigger = document.querySelector("#bigger");
const smaller = document.querySelector("#smaller");
const reset = document.querySelector("#reset");
const coord = document.querySelector("#coord");

let x, y;

const shapes = [
  "square",
  "rectangle",
  "circle",
  "oval",
  "parallelogram",
  "egg",
];

let cur_color = "rgb(0, 0, 0)";
let cur_shape = shapes[0];

// Show coordinates
document.addEventListener("mousemove", function (event) {
  x = event.clientX;
  y = event.clientY;

  const div = document.createElement("div");
  div.setAttribute("id", `${cur_shape}`);
  div.setAttribute("class", "removable");
  div.style.position = "absolute";
  div.style.top = `${y}px`;
  div.style.left = `${x}px`;
  div.style.backgroundColor = cur_color;
  div.style.border = "1px solid white";

  document.body.appendChild(div);
});

document.addEventListener("click", function () {});

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

// Reset UI
function reset_ui() {
  cur_color = "rgb(0, 0, 0)";
  cur_shape = shapes[0];

  shape.innerHTML = `Q - Shape`;
  color.innerHTML = `W - Color`;
  back.innerHTML = "E - Background";
  bigger.innerHTML = "R - Bigger";
  smaller.innerHTML = "T - Smaller";

  document.body.style.backgroundColor = "#000533";

  // const divs = document.getElementsByClassName("removable");
  // for (const div of divs) {
  //   div.remove();
  // }
}

// Keyboard Events
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    // Change shape
    let cur = shapes.indexOf(cur_shape);
    cur < 5 ? (cur += 1) : (cur = 0);
    cur_shape = shapes[cur];
    shape.innerHTML = `Q - ${cur_shape}`;
  } else if (event.code == "KeyW") {
    // Change color
    cur_color = random_color();
    color.innerHTML = `W - ${cur_color}`;
  } else if (event.code == "KeyE") {
    // Change background color
    console.log("Background");
    let b_color = random_color();
    back.innerHTML = `E - ${b_color}`;
    document.body.style.backgroundColor = b_color;
  } else if (event.code == "KeyR") {
    console.log("Bigger");
  } else if (event.code == "KeyT") {
    console.log(`Smaller`);
  } else if (event.code == "Escape") {
    console.log(`Reset`);
    reset_ui();
  }
});
