// script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
});
