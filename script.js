var time = 60;
var hit = 0;
var score = 0;

function makeBubble() {
  var clutter = "";

  for (var i = 0; i <= 229; i++) {
    clutter += `<div id="circle">${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector("#body").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}

function getNewHit() {
  hit = Math.floor(Math.random(1, 9) * 10);
  document.querySelector(".hit").textContent = hit;
}

function timer() {
  setInterval(() => {
    if (time > 0) {
      timer = time--;
      document.querySelector(".timer").textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector(
        "#body"
      ).innerHTML = `<h1>Game Over! & Your Score Is :  ${score}</h1>`;
    }
  }, 1000);
}

document.querySelector("#body").addEventListener("click", function (e) {
  var clickedNum = Number(e.target.textContent);
  if (clickedNum === hit) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

getNewHit();
timer();
makeBubble();
