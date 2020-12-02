
function playSound(e) {
    //console.log(e.keyCode); // This will show the keyCode for each key pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stops the function from running, in case a key is pressed that isn't part of the code
    audio.currentTime = 0; // rewinds the audio to start, for instances when the same key is pressed in succession
    audio.play();
    key.classList.add('playing');
  };

  function removeTransition(e) {
      if(e.propertyName !== 'transform') return; // skip if it is now a transform
      this.classList.remove('playing');
    };

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  // Listener for keyup
  window.addEventListener('keydown', playSound);