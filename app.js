// Function with no args to sum all numbers.
function findSum() {
  var args = arguments; // Var to store agruments array.
  var sumOfNos = 0; // Var to store the sum of all the arguments.

  for (arg in args) { // Iterate all args through for in loop.
    sumOfNos += args[arg];  // Sum up operation.
  }

  return sumOfNos; // Returning the final output.
}

console.log(findSum(1,2,3)); // Prints 6.
console.log(findSum(1,2,3,4,5,6,7,8,9,10)); // Prints 55.

