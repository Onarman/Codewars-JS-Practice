//-------- Set Reducer -------//
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

// When your function has reduced the array to a single integer following these rules, it should return that integer.

// [2] => 2

// Rules and assertions
// All test arrays will be 2+ in length
// All integers in the test arrays will be positive numbers from 0 - 9
// You should return an integer, not an array with 1 element


//? Solution 
function setReducer(arr) {
	while (arr.length > 1) {
	  arr = reduceArray(arr);
	}
	return arr[0];
  }
  
  function reduceArray(arr) {
	let reducedArr = [];
	let count = 1;
	
	for (let i = 0; i < arr.length; i++) {
	  if (arr[i] !== arr[i+1]) {
		reducedArr.push(count);
		count = 1;
	  } else {
		count++;
	  }
	}
	
	return reducedArr;
  }
  
  // Örnek kullanım
  const inputArray = [0, 4, 6, 8, 8, 8, 5, 5, 7];
  const result = setReducer(inputArray);
  console.log(result);


  //? Solution Python

//   from itertools import groupby

// def set_reducer(inp):
//     while len(inp) > 1:
//         inp = [len(list(b)) for a, b in groupby(inp)]
//     return inp[0]



  //? Solution Python-2
// def set_reducer(inp):
//     result = []
//     i = 0
//     while i < len(inp):
//         count = 1
//         while i + 1 < len(inp) and inp[i] == inp[i + 1]:
//             count += 1
//             i += 1
//         result.append(count if count > 1 else 1)
//         i += 1
//     if len(result) == 1:
//         return result[0]
//     else:
//         return set_reducer(result)