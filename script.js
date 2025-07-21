// make sure these match the HTML element names for the ID then class.

let input = document.querySelector("#name");
let display = document.querySelector(".display");

// This code should be working
input.addEventListener("input", function () {
  const name = input.value;
  display.textContent = name;
});
// missing function?

// you should see 5 in the output of your console
const addNums = (num1 = 2, num2 = 3) => num1 + num2;
console.log(2 + 3);
