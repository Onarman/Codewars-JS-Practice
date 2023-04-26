// ----------Flatten and sort an array--------//

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

//? Solution

function flattenAndSort(array) {
    return array.flat().sort((a,b)=>a-b);// bir array içindeki diiğer arrayların içindeki elemanları alarak tek bir array içine atar
  }

  //? Solution-2

  const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)


//   //? Python Solution 
//   def flattenAndSort(array):
//     return sorted([j for i in array for j in i]);

//   //? Python Solution-2
//   def flattenAndSort(array):
//     sorted((sum(array,[])))

//   //? Python Solution-3
// def flatten_and_sort(array):
//     newList = []
//     for item in array:
//         newList += item
//     return sorted(newList)
