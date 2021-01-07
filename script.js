'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.modal-close-button');
const modalOpenButtons = document.querySelectorAll('.modal-open-button');

const openModal = function () {
    modal.classList.remove('hidden'); // Notice we do not need to add a dot before the class name.
    // The dot is only necessary when selecting a class.
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < modalOpenButtons.length; i++)
    modalOpenButtons[i].addEventListener('click', openModal); // No need to add () at the end of the function*.
modalCloseButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (pressedKey) { // keypress dows not work for Escape

    console.log(pressedKey.key);
    if (pressedKey.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

// *When a function is ended with (), that function will be immediatly called by the script when reading the respective line.
// What we want is for it to be called only at the event of a click.