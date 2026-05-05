// expose.js

window.addEventListener('DOMContentLoaded', init);

const confetti = new JSConfetti();
function init() {
  const hornSelector = document.getElementById('horn-select');
  const playSound = document.querySelector('button');
  const volume = document.querySelector("[type='range']");

  hornSelector.addEventListener('change', handleHornChange);
  playSound.addEventListener('click', handlePlaySound);
  volume.addEventListener('input', handleVolume);
}

function handleHornChange(event) {
  const selectedHorn = event.target.value;
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  hornImage.src = `assets/images/${selectedHorn}.svg`;
  hornImage.alt = selectedHorn;
  audio.src = `assets/audio/${selectedHorn}.mp3`;
}

function handlePlaySound() {
  const audio = document.querySelector('audio');
  const selectedHorn = document.getElementById('horn-select').value;

  audio.play();
  if (selectedHorn == 'party-horn') {
    confetti.addConfetti();
  }
}

function handleVolume(event) {
  const volume = event.target.value;
  const volumeImage = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');

  audio.volume = volume / 100;
  if (volume == 0) {
    volumeImage.src = 'assets/icons/volume-level-0.svg';
  } else if (volume < 33) {
    volumeImage.src = 'assets/icons/volume-level-1.svg';
  } else if (volume < 67) {
    volumeImage.src = 'assets/icons/volume-level-2.svg';
  } else {
    volumeImage.src = 'assets/icons/volume-level-3.svg';
  }
}