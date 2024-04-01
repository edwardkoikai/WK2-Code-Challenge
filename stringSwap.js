// Declare a function named string stringSwap that takes text as a parameter
function stringSwap(text){
    // Declare an empty array named newText
    let newText = []
    // iterate over the array using for of
    for(let char of text){
        // use if else to check if the character is in uppercase 
        if(char === char.toUpperCase()){
            newText += char.toLowerCase() //store the results in the empty array
        }
        else{
            newText += char.toUpperCase()
        }
    }
    return newText //return value for the function
}
console.log(stringSwap('The Quick Brown Fox')) //invoking the function