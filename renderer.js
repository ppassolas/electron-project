// Manage app theme
document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDarkMode ? '🌙' : '☀️'
})

// Button counter
const button = document.getElementById('btn');
const count = document.getElementById('count');

button.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) + 1;
})
