// EASY(1)

var arr = [1, 2, 4, 5, 6, 0, 10, 9, 23];

function oddEvenChecker(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      console.log(numbers[i] + " is even");
    } else {
      console.log(numbers[i] + " is odd");
    }
  }
  return numbers;
}

oddEvenChecker(arr);


function oddEvenSplitter(numbers) {
    let odds = [];
    let evens = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        evens.push(numbers[i]);
      } else {
        odds.push(numbers[i]);
      }
    }
    return {odds, evens};
  }
  
  let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = oddEvenSplitter(randomArray);
console.log(result.odds); // Output: [1, 3, 5, 7, 9]
console.log(result.evens); // Output: [2, 4, 6, 8]


// EASY(2)
function findPrimes(numArray) {
    // Create an empty array to hold the prime numbers
    const primeArray = [];
  
    // Loop through each number in the input array
    for (let num of numArray) {
      let isPrime = true;
  
      // Check if the number is divisible by any number smaller than itself
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          // If it is, then it's not a prime number
          isPrime = false;
          break;
        }
      }
  
      // If the number is prime, add it to the primeArray
      if (isPrime && num > 1) {
        primeArray.push(num);
      }
    }
  
    // Return the primeArray
    return primeArray;
  }
  

  const numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeArray1 = findPrimes(numArray1);
console.log(primeArray1); // Output: [2, 3, 5, 7]

const numArray2 = [10, 18, 19, 29, 33, 35, 47, 66, 83];
const primeArray2 = findPrimes(numArray2);
console.log(primeArray2); // Output: [19, 29, 47, 83]
