function playSound(e) {
    // Check for keyboard event
    const keyCode = e.keyCode || e.target.getAttribute('data-key');
    
    // Find the audio element
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return; // Stop if no audio element found
    
    // Find the key element
    const key = document.querySelector(`.drum-key[data-key="${keyCode}"]`);
    
    // Play the sound
    audio.currentTime = 0; // Rewind to start
    audio.play();
    
    // Add visual effect
    key.classList.add('playing');
  }
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  // Add keyboard event listener
  window.addEventListener('keydown', playSound);
  
  // Add click event listeners to all drum keys
  const keys = document.querySelectorAll('.drum-key');
  keys.forEach(key => {
    key.addEventListener('click', playSound);
    key.addEventListener('transitionend', removeTransition);
  });