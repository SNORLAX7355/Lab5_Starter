// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
let voices = [];

function init() {
  populateVoiceList();
}

function populateVoiceList() {
  const voiceSelect = document.querySelector('select');
  voices = synth.getVoices();

  for (const voice in voices) {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    
    if (voice.default) {
      option.textContent += ' - DEFAULT';
    }

    option.setAttribute('value', voice.name);
    voiceSelect.appendChild(option);
  }
}