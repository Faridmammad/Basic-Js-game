var button = document.getElementById("button");
var scoreText = document.getElementById("xal");
var timeText = document.getElementById("vaxt");

var score = 0;
var timeLeft = 10;

var timer = setInterval(function() {
  timeLeft--;
  timeText.innerHTML = "Qalan vaxt: " + timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    button.disabled = true;
      if (score > 30){
        alert("Vau, ilk dəfədir belə sürətlisini görürəm!");
      }
    alert("Vaxt bitti! Topladığınız xal: " + score);
  }
}, 1000);

button.addEventListener("click", function() {
  score++;
  scoreText.innerHTML = "Toplanılan xal: " + score;
});

/* Burada 3 rəngdə fərqli button yerləşdirib onların random rəng dəyişməsindən oyunu çətinləşdirə bilərik. Bu zaman oyunçu sadəcə doğru rəngə klik etdiyi zaman xal qazanacaq. */

