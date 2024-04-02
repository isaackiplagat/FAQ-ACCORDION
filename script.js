"use strict";
const btnIsOpen = document.querySelectorAll(".icon");
const plus = document.querySelectorAll(".plus");
const isHidden = document.querySelector(".hidden");
const paragraphHidden = document.querySelectorAll(".paragraph");
for (let x = 0; x < btnIsOpen.length; x++) {
  btnIsOpen[x].addEventListener("click", function () {
    for (let i = 0; i < paragraphHidden.length; i++) {
      if (i === x) {
        isHidden
          ? paragraphHidden[i].classList.add("shown")
          : paragraphHidden[i].classList.remove("shown");

        return;
      }
    }
  });
}
console.log(plus.values);
