const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * 3 * (wrapperRect.width - 
        noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * 3 * (wrapperRect.height - noBtnRect.height)) + 1;

    // Correct the style property names and set units for the values
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
