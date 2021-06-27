
const sum = ((x, y) => {
    return x + y
  })
  
  const multiply = ((x, y) => {
    return x * y
  })
  
  const calculator = ((callback, firstValue, secondValue) =>{
    console.log(`The result is ${callback(firstValue, secondValue)}`)
  })
  
  calculator(sum, 1, 3);
  // "The result is 4"
  
  calculator(multiply, 2, 5);
  // "The result is 10"
  