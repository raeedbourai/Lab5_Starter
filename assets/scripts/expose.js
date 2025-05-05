// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const volSlider = document.querySelector('input[type="range"]');
  const volIcon = document.querySelector('#volume-controls img');
  const audioElem = document.querySelector('audio');

  volSlider.addEventListener('input', function() {
    const volVal = parseInt(this.value);

    if(volVal === 0){
      volIcon.src = 'assets/icons/volume-level-0.svg';
      volIcon.alt = 'Volume level 0';
    }
    else if(volVal > 0 && volVal < 33){
      volIcon.src = 'assets/icons/volume-level-1.svg';
      volIcon.alt = 'Volume level 1';
    }
    else if(volVal >= 33 && volVal < 67){
      volIcon.src = 'assets/icons/volume-level-2.svg';
      volIcon.alt = 'Volume level 2';
    }
    else if(volVal >= 67){
      volIcon.src = 'assets/icons/volume-level-3.svg';
      volIcon.alt = 'Volume level 3';
    }

    audioElem.volume = volVal / 100;
  })


  const buttonElem = document.querySelector('button');
  const selectorElem = document.getElementById('horn-select');
  const imgElem = document.querySelector('header + img');

  selectorElem.addEventListener('input', function() {
    if (selectorElem.value == "air-horn") {
      imgElem.alt = 'air horn';
      imgElem.src = 'assets/images/air-horn.svg';
      audioElem.src = 'assets/audio/air-horn.mp3';
    }
  })



  buttonElem.addEventListener('click', function() {
    audioElem.play();
  })
}