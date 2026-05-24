const container = document.getElementById('app-container');

// Create 25 squares
for (let i = 0; i < 25; i++) {
    const square = document.createElement('div');
    square.classList.add('music-square');
    // Optional: Add a number to see the grid layout clearly
    // square.innerText = i + 1; 
    container.appendChild(square);
}