const envelopeBg = document.getElementById('envelopeBg');
const mailContent = document.getElementById('mailContent');
const openBtn = document.getElementById('openBtn');
const styleBtn = document.getElementById('styleBtn');

let isOpen = false;
let designIndex = 0;
const designs = [
  'mail1.png',
  'mail2.png',
  'mail3.png'
];

// Set default background
envelopeBg.style.backgroundImage = `url('${designs[designIndex]}')`;
envelopeBg.style.backgroundSize = 'cover';
envelopeBg.style.backgroundPosition = 'center';

openBtn.addEventListener('click', () => {
  isOpen = !isOpen;

  if (isOpen) {
    // Fade out PNG
    envelopeBg.classList.add('hidden');
    // Show text slightly after fade starts
    setTimeout(() => {
      mailContent.classList.add('visible');
    }, 300); // matches fade timing
    openBtn.textContent = 'Close Mail';
  } else {
    mailContent.classList.remove('visible');
    envelopeBg.classList.remove('hidden');
    openBtn.textContent = 'Open Mail';
  }
});

styleBtn.addEventListener('click', () => {
  designIndex = (designIndex + 1) % designs.length;
  envelopeBg.style.backgroundImage = `url('${designs[designIndex]}')`;
});