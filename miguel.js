// // EASY(1)

// var arr = [1, 2, 4, 5, 6, 0, 10, 9, 23];

// function oddEvenChecker(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//       console.log(numbers[i] + " is even");
//     } else {
//       console.log(numbers[i] + " is odd");
//     }
//   }
//   return numbers;
// }

// oddEvenChecker(arr);


// function oddEvenSplitter(numbers) {
//     let odds = [];
//     let evens = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] % 2 == 0) {
//         evens.push(numbers[i]);
//       } else {
//         odds.push(numbers[i]);
//       }
//     }
//     return {odds, evens};
//   }
  
//   let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = oddEvenSplitter(randomArray);
// console.log(result.odds); // Output: [1, 3, 5, 7, 9]
// console.log(result.evens); // Output: [2, 4, 6, 8]


// // EASY(2)
// function findPrimes(numArray) {
//     // Create an empty array to hold the prime numbers
//     const primeArray = [];
  
//     // Loop through each number in the input array
//     for (let num of numArray) {
//       let isPrime = true;
  
//       // Check if the number is divisible by any number smaller than itself
//       for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//           // If it is, then it's not a prime number
//           isPrime = false;
//           break;
//         }
//       }
  
//       // If the number is prime, add it to the primeArray
//       if (isPrime && num > 1) {
//         primeArray.push(num);
//       }
//     }
  
//     // Return the primeArray
//     return primeArray;
//   }
  

//   const numArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeArray1 = findPrimes(numArray1);
// console.log(primeArray1); // Output: [2, 3, 5, 7]

// const numArray2 = [10, 18, 19, 29, 33, 35, 47, 66, 83];
// const primeArray2 = findPrimes(numArray2);
// console.log(primeArray2); // Output: [19, 29, 47, 83]

// Medium (1)

// var arr = ["a", "e", "i", "o", "u"];
// var letter = "p";

// function vowelChecker(letterToCheck) {
//   if (arr.includes(letterToCheck)) {
//     console.log('It is a vowel');
//     return true;
//   } else {
//     console.log("It is not a vowel");
//     return false;
//   }
// }

// vowelChecker(letter);

// MEDIUM (2)
// function isAnagram(str1, str2) {
//     // First, remove any non-alphabetic characters and convert to lowercase
//     str1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
//     str2 = str2.replace(/[^a-z]/gi, '').toLowerCase();
    
//     // Check if the strings are the same length
//     if (str1.length !== str2.length) {
//       return false;
//     }
    
//     // Create a frequency counter object for each string
//     let freqCounter1 = {};
//     let freqCounter2 = {};
    
//     // Count the frequency of each character in each string
//     for (let char of str1) {
//       freqCounter1[char] = (freqCounter1[char] || 0) + 1;
//     }
//     for (let char of str2) {
//       freqCounter2[char] = (freqCounter2[char] || 0) + 1;
//     }
    
//     // Check if the frequency counters are the same
//     for (let key in freqCounter1) {
//       if (!(key in freqCounter2) || freqCounter1[key] !== freqCounter2[key]) {
//         return false;
//       }
//     }
    
//     // If all checks pass, the strings are anagrams
//     return true;
//   }
  
// Medium(3)
// console.log(isAnagram('listen', 'silent')); // true
// console.log(isAnagram('debit card', 'bad credit')); // true
// console.log(isAnagram('foo', 'bar')); // false


// function largestCommonDivisor(num1, num2) {
//     let divisor = Math.min(num1, num2);
//     while (divisor > 0) {
//       if (num1 % divisor === 0 && num2 % divisor === 0) {
//         return divisor;
//       }
//       divisor--;
//     }
//     return 1; // if no common divisor is found, return 1
//   }
  
// console.log(largestCommonDivisor(12, 30)); // Output: 6
// console.log(largestCommonDivisor(50, 20)); // Output: 10
// console.log(largestCommonDivisor(10, 17)); // Output: 1

// const car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     mileage: 0,
//     color: "Blue",
    
//     driveToWork: function() {
//       const oldMileage = this.mileage;
//       this.mileage += 20;
//       console.log(`Old mileage: ${oldMileage}, new mileage: ${this.mileage}`);
//     },
    
//     driveAroundTheWorld: function() {
//       const oldMileage = this.mileage;
//       this.mileage += 24000;
//       console.log(`Old mileage: ${oldMileage}, new mileage: ${this.mileage}`);
//     },
    
//     runErrands: function() {
//       const oldMileage = this.mileage;
//       this.mileage += 10;
//       console.log(`Old mileage: ${oldMileage}, new mileage: ${this.mileage}`);
//     }
//   };
  
// console.log(car.mileage); // Output: 0

// car.driveToWork(); // Output: Old mileage: 0, new mileage: 20
// console.log(car.mileage); // Output: 20

// car.runErrands(); // Output: Old mileage: 20, new mileage: 30
// console.log(car.mileage); // Output: 30

// car.driveAroundTheWorld(); // Output: Old mileage: 30, new mileage: 24030
// console.log(car.mileage); // Output: 24030

// Hard
// function hasMatchingBrackets(str) {
//     const stack = [];
//     const openBrackets = ['(', '[', '{'];
//     const closeBrackets = [')', ']', '}'];
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
  
//       if (openBrackets.includes(char)) {
//         stack.push(char);
//       } else if (closeBrackets.includes(char)) {
//         const lastOpenBracket = stack.pop();
  
//         if (
//           openBrackets.indexOf(lastOpenBracket) !==
//           closeBrackets.indexOf(char)
//         ) {
//           return false;
//         }
//       }
//     }
  
//     return stack.length === 0;
//   }
  