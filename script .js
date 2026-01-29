const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

yesBtn.addEventListener("click", () => {
  song.play();
  yesBtn.innerText = "I Love You 💖🌹";
  document.body.classList.add("celebrate");
});

/* Naughty NO button */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});