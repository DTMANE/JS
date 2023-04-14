const names = document.querySelector("#names");
// console.log(name1);
const submits = document.querySelector("#forms");
const display = document.querySelector("h1");

submits.addEventListener("submit", addName);
const nameValue = [];
function addName(e) {
  e.preventDefault();

  nameValue.push(names.value);
  console.log(nameValue);
  // const k = new Date().getTime().toString();
  localStorage.setItem("d", nameValue);
  display.innerHTML = localStorage.getItem("d");

  // for (let index = 0; index < nameValue.length; index++) {
  //   display.innerHTML = nameValue;
  // }
}
