const p1Btn = document.querySelector(".playerone");
const p2Btn = document.querySelector(".playertwo");
const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const reset = document.querySelector("#reset");
const maxScoreSelect = document.querySelector("#max-score");
const whoWins = document.querySelector("#who-wins");
const btn1Audio = new Audio("https://www.fesliyanstudios.com/play-mp3/5254");
const btn2Audio = new Audio("https://www.fesliyanstudios.com/play-mp3/5255");
const winnerAudio = new Audio("https://www.fesliyanstudios.com/play-mp3/5253");

let p1ScoreInt = 0;
let p2ScoreInt = 0;

let gameOver = false;

//player one button

p1Btn.addEventListener("click", () => {
  const maxScore = parseInt(maxScoreSelect.value);
  if (!gameOver) {
    p1ScoreInt += 1;
    btn1Audio.play();
    p1Score.innerText = `${p1ScoreInt}`;
    currentLeader(p1Score, p2Score, p1ScoreInt, p2ScoreInt);
  }
  if (checkScore(p1Score, p2Score, p1ScoreInt, p2ScoreInt, maxScore) == true) {
    gameOver = true;
  }
});

//player two button

p2Btn.addEventListener("click", () => {
  const maxScore = parseInt(maxScoreSelect.value);
  if (!gameOver) {
    p2ScoreInt += 1;
    btn2Audio.play();
    p2Score.innerText = `${p2ScoreInt}`;
    currentLeader(p1Score, p2Score, p1ScoreInt, p2ScoreInt);
  }
  if (checkScore(p1Score, p2Score, p1ScoreInt, p2ScoreInt, maxScore) == true) {
    gameOver = true;
  }
});

//reset button

reset.addEventListener("submit", function (e) {
  e.preventDefault();
  //playerone reset
  p1Score.innerText = 0;
  p1ScoreInt = 0;
  p1Score.style.color = "#ccc";
  p1Score.style.animation = "none";

  //playertwo reset
  p2Score.innerText = 0;
  p2ScoreInt = 0;
  p2Score.style.color = "#ccc";
  p2Score.style.animation = "none";

  //text reset
  whoWins.innerText = "-";

  //game reset
  gameOver = false;
});

//game logic

const checkScore = (p1, p2, p1Num, p2Num, max) => {
  if (p1Num >= max && p1Num > p2Num + 1) {
    winnerAudio.play();
    whoWins.innerText = "P1 Wins!";
    p1Score.style.animation = "winner 0.5s infinite";
    return true;
  } else if (p2Num >= max && p2Num > p1Num + 1) {
    winnerAudio.play();
    whoWins.innerText = "P2 Wins!";
    p2Score.style.animation = "winner 0.5s infinite";
    return true;
  } else {
    return false;
  }
};

//change color of winner
const currentLeader = (p1, p2, p1Num, p2Num) => {
  if (p1Num > p2Num) {
    p1.style.color = "green";
    p2.style.color = "red";
  } else if (p1Num < p2Num) {
    p1.style.color = "red";
    p2.style.color = "green";
  } else {
    p1.style.color = "#ccc";
    p2.style.color = "#ccc";
  }
};
