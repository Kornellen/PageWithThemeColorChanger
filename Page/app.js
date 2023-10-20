const btnElem = document.querySelector("#btn");
const hexColor = document.querySelector("#colorChanger");
const resetBtn = document.querySelector("#reset");

const changeColor = () => {
  newColor = hexColor.value;
  document.body.style.backgroundColor = newColor;
};

const resetColor = () => {
  document.body.style.backgroundColor = "white";
};

resetBtn.addEventListener("click", resetColor);
btnElem.addEventListener("click", changeColor);
