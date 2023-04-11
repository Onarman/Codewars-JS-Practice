//------------Find The Max Sum-----------//

// As shown above. There are three grids. Each grid fill in a number(let's call a1, a2 and a3). Such that 0 ≤ a1, a2, a3 ≤ n, where n is given, and meet the following rules:

// - a1 + a2 is a multiple of 2;
// - a2 + a3 is a multiple of 3;
// - a1 + a2 + a3 is a multiple of 5;
// Your task is to find a set of a1, a2, a3, which makes a1 + a2 + a3 maximum. Returns the sum of a1, a2, a3.

// Input/Output
// [input] integer n

// A non-negative integer. It's the maximum possible value of a1, a2, a3.

// 0 ≤ n ≤ 10000

// [output] an integer

// The maximum sum of a1, a2, a3.

// Example
// For n = 0, the output should be 0.

// The possible value of a1, a2, a3 can be a1 = 0, a2 = 0, a3 = 0.

// For n = 3, the output should be 5.

// The possible value of a1, a2, a3 can be a1 = 2, a2 = 2, a3 = 1.

// For n = 5, the output should be 10.

// The possible value of a1, a2, a3 can be a1 = 4, a2 = 2, a3 = 4.

// For n = 9, the output should be 25.

// The possible value of a1, a2, a3 can be a1 = 7, a2 = 9, a3 = 9.

// For n = 30, the output should be 90.

// The possible value of a1, a2, a3 can be a1 = 30, a2 = 30, a3 = 30.

//? Solution

function findMaxSum(n){
    let result = 0;
    for (let i = (n - 30); i <= n; i++){
      for (let j = (n - 30); j <= n; j++){
        for (let z = (n - 30); z <= n; z++){
          if ((i + j) % 2 === 0 && (j + z) % 3 === 0 && (i + j + z) % 5 === 0){
            result = Math.max(result, i + j + z);
          }
        }
      }
    }
    return result;
  }