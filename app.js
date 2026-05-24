const container = document.getElementById('app-container');
for (let i = 0; i < 4; i++) {
    const square = document.createElement('div');
    square.classList.add('music-square');
    container.appendChild(square);
}