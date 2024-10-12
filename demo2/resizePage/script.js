const divider = document.getElementById("dividerButton");
const left = document.getElementById("left");
const right = document.getElementById("right");
const container = document.getElementById("container");

let isDragging = false;
let startX = 0;
let startLeftWidth = 0;
let startRightWidth = 0;

divider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  startLeftWidth = left.offsetWidth;
  startRightWidth = right.offsetWidth;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - startX;
  const newLeftWidth = startLeftWidth + deltaX;
  const newRightWidth = startRightWidth - deltaX;

  if (newLeftWidth >= 500 && newRightWidth >= 500) {
    left.style.flexBasis = `${newLeftWidth}px`;
    right.style.flexBasis = `${newRightWidth}px`;
  }

  e.preventDefault();
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
