const button = document.getElementById('btn');
const count = document.getElementById('count');

button.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) + 1;
});