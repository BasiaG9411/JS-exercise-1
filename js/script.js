let counter = 0;
const counterElement = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

increaseButton.addEventListener("click", () => {
  counter++;
  counterElement.innerText = counter;
  if (counter > 0) {
    counterElement.style.color = "green";
  }
});

decreaseButton.addEventListener("click", () => {
  counter--;
  counterElement.innerText = counter;
  if (counter < 0) {
    counterElement.style.color = "red";
  }
});

resetButton.addEventListener("click", () => {
    counter = 0;
    counterElement.innerText = counter;
    counterElement.style.color = "black";
  });
