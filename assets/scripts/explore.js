// explore.js

window.addEventListener('DOMContentLoaded', init);
let synth;
let voiceSelect;
let textArea;
let button;
let faceImage;

function init() {
  synth = window.speechSynthesis;
  voiceSelect = document.getElementById('voice-select');
  textArea = document.getElementById('text-to-speak');
  button = document.querySelector('button');
  faceImage = document.querySelector('#explore img');

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', handleSpeak);
}

function populateVoiceList() {
  const voices = synth.getVoices();
  voiceSelect.innerHTML = '<option disabled selected>Select Voice:</option>'

  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

function handleSpeak() {
  const text = textArea.value;
  const voices = synth.getVoices();
  const index = voiceSelect.value;

  if (!text || index === '' || index === 'select') return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[index];

  utterance.onstart = () => {
    faceImage.src = 'assets/images/smiling-open.png'
  }

  utterance.onend = () => {
    faceImage.src = 'assets/images/smiling.png'
  }

  synth.speak(utterance);
}