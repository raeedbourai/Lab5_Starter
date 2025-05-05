// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const buttonElem = document.querySelector('button');
  const textElem = document.querySelector('textarea');
  let textToSpeak = textElem.value;
  const face = document.querySelector('header + img');

  textElem.addEventListener('input', function() {
    textToSpeak = textElem.value;
  })

  buttonElem.addEventListener('click', function() {
    const utterThis = new SpeechSynthesisUtterance(textToSpeak);

    utterThis.onstart = () => {
      face.src = "assets/images/smiling-open.png";
      face.alt = "talking";
    };

    utterThis.onend = () => {
      face.src = "assets/images/smiling.png";
      face.alt = "Smiling face";
    };
    
    const voiceToSpeak = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceToSpeak) {
        utterThis.voice = voices[i];
      }
    }
    
    utterThis.pitch = 1;
    utterThis.rate = 1;
    utterThis.volume = 0.5;

    synth.speak(utterThis);
  })
}