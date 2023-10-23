const webPasswordContent = document.getElementById("password-content");

let number = 0;
let numbersAndLetters = ['a','s','h','j','k','l','q','w','e','r','t','y','u','i','o','@','#','$','&'];

// adding numbers to the array
while (number < 10){
numbersAndLetters.push(number.toString())
number++
}

// console.log(numbersAndLetters.length);
// console.log(numbersAndLetters);
// let randomPassGenerator = Math.floor(Math.random(Math.round()) * numbersAndLetters.length);

// console.log(randomPassGenerator);
function renderPassword() {
let password = "";
while (password.length < 12){
password += numbersAndLetters[Math.floor(Math.random(Math.round()) * numbersAndLetters.length)];
}
 
console.log(password);

webPasswordContent.innerHTML = `Your confidential  password is <b><i><span>${password}</span><i></b>`;
}
