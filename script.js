// Function to handle the click event
function handleClick() {
    const textDiv = document.querySelector('.text');
    const flames = document.querySelectorAll('.flame, .flame2, .flame3');

    // Move the text div up by 200px and change opacity
    if (textDiv.style.top !== '-200px') {
        textDiv.style.top = '-200px'; // Move up by 200px
        textDiv.style.opacity = '1';  // Make text visible
        
        // Set opacity to 0 for all flames
        flames.forEach(flame => {
            flame.style.opacity = '0';
        });
    }
}

// Add event listeners to flame, flame2, and flame3
document.querySelectorAll('.flame, .flame2, .flame3').forEach(flame => {
    flame.addEventListener('click', handleClick);
});
