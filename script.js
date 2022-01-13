// Progress Steps
const progressLine = document.getElementById("progress-line");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circles");
console.log(progressLine);

// Adding eventListeners for our buttons to add the progress

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

let update = () => {
  // for the circles
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // for the progress line

  const allActives = document.querySelectorAll(".active");
  // its an array of active classes with the length which we'll use
  // for the calculation of width of the line
  progressLine.style.width =
    ((allActives.length - 1) / (circles.length - 1)) * 100 + "%"; //using string concatenation to place % at the end of the expression result;

  // setting up disables functionality for buttons
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === 4) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
