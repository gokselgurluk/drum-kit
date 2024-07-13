document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.drum');
    
    // Function to play sound and add visual feedback
    function playSound(button) {
        const audio = new Audio(button.getAttribute('data-sound'));
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play(); // Play the audio
        
        // Add visual feedback (optional)
        button.classList.add('playing');
        setTimeout(() => {
            button.classList.remove('playing');
        }, 100); // Adjust as necessary to match your CSS animation duration
    }
    
    // Click event listener for drum buttons
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            playSound(button);
        });
    });

    // Keyboard event listener for drum buttons
    document.addEventListener('keydown', function(event) {
        const key = event.key.toUpperCase(); // Get uppercase key for consistency
        const button = document.querySelector(`.drum[data-key="${key.charCodeAt(0)}"]`);
        if (button) {
            playSound(button);
        }
    });
    // Video controls
const video = document.getElementById('drumVideo');
const playButton = document.getElementById('playVideo');
const pauseButton = document.getElementById('pauseVideo');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});
});
