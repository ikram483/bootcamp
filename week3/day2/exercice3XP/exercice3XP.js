let number = prompt("Enter a number:");

while (Number(number) < 10 || isNaN(number)) {
  number = prompt("Number is too small! Please enter a number greater than or equal to 10:");
}

alert(`Thanks! You entered ${number}, which is valid.`);
console.log(number);
