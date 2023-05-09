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
