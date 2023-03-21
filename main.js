"use strict";

const colors = ["blue", "pink", "red", "brown", "yellow", "purple"];
const ul = document.querySelector("ul");
for (const color of colors) {
  const li = document.createElement("li");
  li.textContent = color;
  ul.append(li);
}
