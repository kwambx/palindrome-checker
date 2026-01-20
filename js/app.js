const firstName=document.getElementById("firstname")
const lastName=document.getElementById("lastname")
const button=document.getElementById("btn")
const greeting=document.getElementById("greeting")
console.log(firstName)
console.log(lastName)
console.log(button)
console.log(greeting)

// button.addEventListener("click",(e)=>{
//     console.log("hello world!")
   // console.log(e)
//console.log(firstName.value)
//console.log(lastName.value)
// const sayHi=document.createElement('h3')
// sayHi.textContent= "Hello"+" " +firstName.value+" "+lastname.value
// sayHi.style.color="yellow"
// greeting.appendChild(sayHi)

let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

let checkPalindrome = () => {
  const regex = /[\W_]/gi;
  let userInput = textInput.value.replace(regex, "").toLowerCase();
  let userInputReverse = userInput.split("").reverse().join("").toLowerCase();

  if (userInput === userInputReverse) {
    result.innerHTML = `<b>${textInput.value}</b> is a palindrome`;
  } else {
    result.innerHTML = `<b>${textInput.value}</b> is not a palindrome`;
  }

}

checkBtn.addEventListener("click", checkPalindrome);
