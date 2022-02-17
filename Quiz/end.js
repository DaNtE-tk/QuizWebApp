console.log("Connected!");

const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalscore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;


finalScore.innerHTML = mostRecentScore;
username.addEventListener('keyup', () =>{
  console.log(username.value);
  saveScoreBtn.disabled = ! username.value;
});

saveHighScore = (e) => {
  console.log("Saved!");
  e.preventDefault();

  const score = {
    score : Math.floor(Math.random() * 100),
    name : username.value
  };
  highScores.push(score);

  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign("index.html");

  console.log(highScores);
};
