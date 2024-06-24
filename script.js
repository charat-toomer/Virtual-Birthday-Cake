document.addEventListener('DOMContentLoaded', () => {
    const rainContainer = document.querySelector(".rain");
    const numberOfDrops = 200;

    const colors = [
        "#FF0000", // Red
        "#FFA500", // Orange
        "#FFFF00", // Yellow
        "#008000", // Green
        "#0000FF", // Blue
        "#4B0082", // Indigo
        "#EE82EE",  // Violet
        "#FFD700", // Gold
        "#00FA9A", // Medium Spring Green
        "#DC143C", // Crimson
        "#FF4500", // Orange Red
        "#7FFF00", // Chartreuse
        "#8A2BE2", // Blue Violet
        "#FF1493", // Deep Pink
        "#00CED1", // Dark Turquoise
        "#FF6347", // Tomato
        "#7B68EE", // Medium Slate Blue
        "#DA70D6", // Orchid
        "#32CD32", // Lime Green
        "#FFB6C1", // Light Pink
    ];

    const layers = [
        { className: 'layer1', size: '2px', duration: '10s' },
        { className: 'layer2', size: '4px', duration: '8s' },
        { className: 'layer3', size: '6px', duration: '6s' },
        { className: 'layer4', size: '8px', duration: '4s' }
    ];

    // Function to handle the click event
    function handleClick() {
        const textDiv = document.querySelector('.text');
        const flames = document.querySelectorAll('.flame, .flame2, .flame3');

        // Move the text div up by 200px and change opacity
        if (textDiv.style.top !== 'calc(50% - 200px)') {
            textDiv.style.top = 'calc(50% - 200px)'; // Move up by 200px
            textDiv.style.opacity = '1';  // Make text visible
            
            // Set opacity to 0 for all flames
            flames.forEach(flame => {
                flame.style.opacity = '0';
            });

            // Create raindrops
            for (let i = 0; i < numberOfDrops; i++) {
                const drop = document.createElement("div");
                drop.classList.add("raindrop");

                // Randomize position, delay, and color
                drop.style.left = `${Math.random() * 100}%`;
                drop.style.animationDelay = `${Math.random() * 5}s`;
                drop.style.background = colors[Math.floor(Math.random() * colors.length)];

                // Assign a random layer class and size based on layer
                const layer = layers[Math.floor(Math.random() * layers.length)];
                drop.classList.add(layer.className);
                drop.style.width = layer.size;
                drop.style.height = layer.size;

                rainContainer.appendChild(drop);
            }
        }
    }

    // Add event listeners to flame elements
    document.querySelectorAll('.flame').forEach(flame => {
        flame.addEventListener('click', handleClick);
    });
});
