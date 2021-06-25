"use strict";

// Variables
const shape = document.querySelector("#shape");
const color = document.querySelector("#color");
const back = document.querySelector("#back");
const bigger = document.querySelector("#bigger");
const smaller = document.querySelector("#smaller");
const reset = document.querySelector("#reset");
const coord = document.querySelector("#coord");

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

// These variables will handle the size of the elements on the screen
let width;
let height;

// Add shape to screen on mouse movement
document.addEventListener("mousemove", function (event) {
  // Capture position of the mouse
  let x = event.clientX;
  let y = event.clientY;

  // Create, style and position of shape on screen
  const div = document.createElement("div");
  div.setAttribute("id", `${cur_shape}`);
  div.setAttribute("class", "removable");
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.style.position = "absolute";
  div.style.top = `${y}px`;
  div.style.left = `${x}px`;
  div.style.backgroundColor = cur_color;
  div.style.border = "1px solid white";
  if (cur_shape == "oval") {
    div.style.borderRadius = `${width}px / ${height}px`;
  }
  document.body.appendChild(div);

  // Capture shape size for use in size functions
  width = div.clientWidth;
  height = div.clientHeight;
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
  width = 100;
  height = 100;
}

// Keyboard Events
document.addEventListener("keydown", function (event) {
  if (event.code == "KeyQ") {
    // Change shape
    let cur = shapes.indexOf(cur_shape);
    cur < 5 ? (cur += 1) : (cur = 0);
    cur_shape = shapes[cur];
    shape.innerHTML = `Q - ${cur_shape}`;

    // I don't know why, but this works
    // without this next two lines of code the shape that is being shown on the screen breaks when changed
    width = -2;
    height = -2;
  } else if (event.code == "KeyW") {
    // Change color
    cur_color = random_color();
    color.innerHTML = `W - ${cur_color}`;
  } else if (event.code == "KeyE") {
    // Change background color
    let b_color = random_color();
    back.innerHTML = `E - ${b_color}`;
    document.body.style.backgroundColor = b_color;
  } else if (event.code == "KeyR") {
    // Make the shape bigger
    if (cur_shape == "oval") {
      width += 2;
      height += 1;
    } else {
      width += 2;
      height += 2;
    }
  } else if (event.code == "KeyT") {
    // Make the shape smaller
    width += -2;
    height += -2;

    // Reset the size of the shapes when one of its attributes reach 0
    if (width == 0 || height == 0) {
      if (cur_shape == "square" || cur_shape == "circle") {
        width = 100;
        height = 100;
      } else if (cur_shape == "rectangle" || cur_shape == "oval") {
        width = 200;
        height = 100;
      } else if (cur_shape == "parallelogram") {
        width = 150;
        height = 100;
      } else if (cur_shape == "egg") {
        width = 126;
        height = 180;
      }
    }
  } else if (event.code == "Escape") {
    // Reset UI when escape is pressed
    reset_ui();
  }
});
