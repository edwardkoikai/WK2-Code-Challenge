// This is a program creates a function that takes an array of 
// numbers as input and returns a new array containing only the prime numbers 
// from the original array. This function efficiently, ensures that it accurately
//  identifies prime numbers and returns them in the same order they appear in the input array

// define array and it some values
const array = [2, 8, 6, 12, 17, 13, 14];
// declare a function that accepts one parameter
function primeNumbers(number) {
  // loop through the the array
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;//return false if it does not meet the condition
    }
  }
  return true;//return value for the function
}
const isPrime = array.filter((number) => primeNumbers(number));//use filter method to ensure you only get the prime numbers
console.log(isPrime);//invoke the function and log the results into the console
