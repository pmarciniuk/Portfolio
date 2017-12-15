// Variables

const works = document.querySelectorAll('.works__single');
const nextBtns = document.querySelectorAll('.next');
const prevBtns = document.querySelectorAll('.previous');
let prev = 0;
let current = 0;
works[current].classList.add('works__single--active');

// Functions

function workNext() {
    prev = current;
    if (current !== works.length - 1) {
        current++;
        works[prev].classList.remove('works__single--active');
        works[current].classList.add('works__single--active');
    } else {
        current = 0;
        works[prev].classList.remove('works__single--active');
        works[current].classList.add('works__single--active');
    }
}

function workPrev() {
    prev = current;
    if (current !== 0) {
        current--;
        works[prev].classList.remove('works__single--active');
        works[current].classList.add('works__single--active');
    } else {
        current = works.length - 1;
        works[prev].classList.remove('works__single--active');
        works[current].classList.add('works__single--active');
    }
}

// Listeners

prevBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        workPrev();
    })
})

nextBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        workNext();
    })
})
