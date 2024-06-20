const $divCards = document.querySelector('.grid');
const $btns = document.querySelectorAll('.btn');
const $scrollToTopBtn = document.getElementById('scrollToTopBtn');

const url = 'https://hp-api.onrender.com/api/characters';

fetch(url)
    .then(response => response.json())
    .then(database => showData(database));
    