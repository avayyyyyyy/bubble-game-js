var clutter = "";

for (var i = 0; i <= 229; i++) {
  clutter += `<div id="circle">${Math.floor(Math.random() * 10)}</div>`;
}

document.querySelector("#body").innerHTML = clutter;

