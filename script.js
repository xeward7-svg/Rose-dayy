// Falling roses
const roseContainer = document.getElementById('rose-container');

function createRose() {
  const rose = document.createElement('div');
  rose.classList.add('rose');
  rose.style.left = Math.random() * window.innerWidth + 'px';
  rose.style.animationDuration = (5 + Math.random() * 5) + 's';
  roseContainer.appendChild(rose);

  // Remove after animation
  setTimeout(() => {
    rose.remove();
  }, 10000);
}

// Create roses continuously
setInterval(createRose, 500);

// Button actions
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const song = document.getElementById('song');

yesBtn.addEventListener('click', () => {
  song.play();
  alert("Yay! You accepted the rose 🥰🌹");
});

noBtn.addEventListener('click', () => {
  alert("Oh no! But I still love you 🥺💖");
});