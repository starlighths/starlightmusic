const container = document.getElementById('app-container');

for (let i = 0; i < 4; i++) {
    const square = document.createElement('div');
    square.classList.add('music-square');
    square.innerText = "Mood " + (i + 1);
    container.appendChild(square);
}const moods = [
    { name: "Happy / Fast", color: "rgba(255, 215, 0, 0.2)" },
    { name: "Happy / Slow", color: "rgba(135, 206, 235, 0.2)" },
    { name: "Sad / Fast", color: "rgba(147, 112, 219, 0.2)" },
    { name: "Sad / Slow", color: "rgba(169, 169, 169, 0.2)" }
];

const container = document.getElementById('app-container');
for (let i = 0; i < 4; i++) {
    const square = document.createElement('div');
    square.classList.add('music-square');
    container.appendChild(square);
}
moods.forEach(mood => {
    const square = document.createElement('div');
    square.classList.add('music-square');
    square.style.backgroundColor = mood.color; // Give them different tint hints
    square.innerText = mood.name;
    square.onclick = () => console.log("Playing music for: " + mood.name);
    container.appendChild(square);
});