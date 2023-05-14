// Put your solution here
function divideArray(numbers) {
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNums.push(numbers[i]);
    } else {
      oddNums.push(numbers[i]);
    }
  }

  evenNums.sort(function (a, b) {
    return a - b;
  });

  oddNums.sort(function (a, b) {
    return a - b;
  });

  if (evenNums.length === 0 || oddNums.length === 0) {
    console.log("None");
  } else {
    console.log("Even numbers: " + evenNums);
    console.log("Odd numbers: " + oddNums);
  }
}
