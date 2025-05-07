let string = "";

const display = document.querySelector('.input');

const buttons = document.querySelectorAll('.button');


const zero = (numberzero) => {
  const inputdisplay = display.textContent;
  if (inputdisplay === '0') {
    display.textContent = numberzero;
  }
  else { display.textContent = inputdisplay + numberzero }
}



buttons.forEach((button) => {
  button.addEventListener('click', (num) => {
    const buttonText = num.target.innerHTML;

    if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
      string += ` ${buttonText} `;
    } else if (buttonText === '=') {
      string = eval(string);
    } else if (buttonText === 'AC') {
      string = "";
    } else {
      string += buttonText;
    }

    display.innerHTML = string;
  });
});