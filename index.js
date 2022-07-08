//Store input and paragraph
const input = document.querySelector('.numberInput');
const para = document.querySelector('p');
//Square function
function squared(num) {
    return num * num;
  }
//Cube function  
  function cubed(num) {
    return num * num * num;
  }
 // Factorial function 
  function factorial(num) {
    if (num < 0) return undefined;
    if (num == 0) return 1;
    let x = num - 1;
    while (x > 1) {
      num *= x;
      x--;
    }
    return num;
  }
// Square root function
function squaredRoot(num) {
    if (num < 0) {return undefined};
    return `${Math.sqrt(num)} and ${-Math.sqrt(num)}`;
    }
//Cube root funcion    
function cubedRoot(num) {
    if (num < 0) { 
        return `${-(Math.pow((-num) , 1/3))}`
    };
    return Math.pow(num , 1/3);
}
//Circunference
function circunference(num) {
    if (num < 0) {
    return undefined;
    }
    return 2 * num * Math.PI;
}
//Calculations submit
input.addEventListener('change', () => {
    const num = parseFloat(input.value);
    if (isNaN(num)) {
      para.textContent = 'You need to enter a number!';
    } else {
      para.textContent = `${num} squared is ${squared(num)}. `;
      para.textContent += `${num} cubed is ${cubed(num)}. `;
      para.textContent += `${num} factorial is ${factorial(num)}. `;
      para.textContent += `${num} squared root is ${squaredRoot(num)}. `;
      para.textContent += `${num} cubed root is ${cubedRoot(num)}. `;
      para.textContent += `${num} circunference is ${circunference(num)}. `;
    }
  });