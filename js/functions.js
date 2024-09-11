'use strict'

document.querySelector('#dice').addEventListener('click', () => {
    const roll = Math.floor(Math.random() *6) + 1;
    document.querySelector('#dice img').src = './img/' + roll + '.png';
})