// DOTS: Level Three

let score = 0;
const balls = document.querySelectorAll('.js-ball');
const scoreDisplay = document.querySelector('.js-score');
const levelWinner = document.querySelector('.level-winner');

balls.forEach(ball => {
  ball.addEventListener('click', function(event) {
    const increment = parseInt(event.target.dataset.increment);
    score += increment;
    scoreDisplay.innerText = `Score: ${score}`;
    
    if (score >= 100) {
      levelWinner.style.opacity = 1;
    }
  });
});

