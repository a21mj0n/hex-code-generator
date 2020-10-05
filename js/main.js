const body = document.querySelector('body');
const tooltip = document.querySelector('.tooltip');
const generateButton = document.querySelector('#generateButton');
const hexCodeText = document.querySelector('#hexCodeText');
const string = 'ABCDEFGH123456789';

function generateColor() {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomString = string.charAt(randomNumber);
    if (randomString) {
      hexCode += randomString;
    }
  }
  return hexCode;
}

generateButton.addEventListener('click', () => {
  hexCodeText.innerHTML = generateColor();
  body.style.backgroundColor = generateColor();
});

hexCodeText.addEventListener('click', () => {
  const hiddenInput = document.createElement('input');
  hiddenInput.value = hexCodeText.innerHTML;
  body.appendChild(hiddenInput);

  hiddenInput.select();
  hiddenInput.setSelectionRange(0, 99999);
  document.execCommand('copy');

  body.removeChild(hiddenInput);
  tooltip.classList.add('tooltip-active');
  setTimeout(() => {
    tooltip.classList.remove('tooltip-active')
  }, 2000);
});
