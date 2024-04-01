//This is a program that defines a function that accepts two numbers and generate an array between them

//Declare a function named arrayNumber that takes two numbers as parameters
function arrayNumber(num1, num2) {
  // define an empty array to store the results
  let result = [];
  // loop through the two numbers
  for (let i = num1; i <= num2; i++) {
    // append the results into our empty array
    result.push(i);
  }
  // return the results a the return value for the function
  return result;
}
// invoke the function by giving it two arguments and loging it into the console
console.log(arrayNumber(4, 7));
console.log(arrayNumber(-4, 7));
