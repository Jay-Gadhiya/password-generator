const password = document.querySelector('#password');
const copyBtn = document.querySelector('#copy-btn');
const passwordLength = document.querySelector('#password-length');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');
const generateBtn = document.querySelector('#generate');
const toast = document.querySelector('.toast');

let upperCaseWords = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseWords = 'abcdefghijklmnopqrstuvwxyz';
let allSymbols = '!@#$%^&*()_+';
const allNumbers = "0123456789";

generateBtn.addEventListener('click', getRandomPass);


function getUpperCase() {
  return upperCaseWords[Math.floor(Math.random() * upperCaseWords.length)];
}

function getLowerCase() {
  return lowerCaseWords[Math.floor(Math.random() * lowerCaseWords.length)];
}

function getSymbols() {
  return allSymbols[Math.floor(Math.random() * allSymbols.length)];
}

function getNumbers() {
  return allNumbers[Math.floor(Math.random() * allNumbers.length)];
}

function getRandomPass() {
  if (uppercase.checked || lowercase.checked || symbols.checked || numbers.checked) {
    generatePassword();

  }
  else {
    console.log('yes');
    let len = passwordLength.value;
  let newPassword = "";

  for (let i = 0; i < len; i++) {
    let x = getRandomPassword();
    newPassword += x;
  }

  password.innerText = newPassword;
  }
}


function generatePassword() {
  let len = passwordLength.value;
  let newPassword = "";

  for (let i = 0; i < len; i++) {
    let x = generateX();
    newPassword += x;
  }

  password.innerText = newPassword;
}

function generateX() {
  let arr = [];
  let lent = passwordLength.value;
  let newPass = '';

  if (uppercase.checked) {
    arr.push(getUpperCase());
  }

  if (lowercase.checked) {
    arr.push(getLowerCase());
  }

  if (symbols.checked) {
    arr.push(getSymbols());
  }

  if (numbers.checked) {
    arr.push(getNumbers());
  }

  if (arr.length === 0) {
    return '';
  }


  return arr[Math.floor(Math.random() * arr.length)];

}

function getRandomPassword() {
  let arr2 = [];

  arr2.push(getUpperCase());

  arr2.push(getLowerCase());

  arr2.push(getSymbols());

  arr2.push(getNumbers());


  return arr2[Math.floor(Math.random() * arr2.length)];
}

copyBtn.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const p = password.innerText;

    if (!p) {
        return;
    }

    textarea.value = p;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();

     setTimeout(() => {
        toast.style.visibility = 'visible';
    }, 100);

    setTimeout(() => {
        toast.style.visibility = 'hidden';
    }, 3000);
});
