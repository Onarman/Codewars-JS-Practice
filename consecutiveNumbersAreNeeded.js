//-------How many consecutive numbers are needed?-------//

// Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.

//? Solution

function consecutive(arr) {
    // Sort the array in ascending order
    arr.sort(function(a, b) {
      return a - b;
    });
  
    // Find the difference between adjacent numbers in the array
    var count = 0;
    for (var i = 0; i < arr.length - 1; i++) {
      count += arr[i + 1] - arr[i] - 1;
    }
  
    return count;
  }

  //? Solution-2

  function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
  }

    //? Python Solution 

    // def consecutive(arr):
    // return max(arr) - min(arr) + 1 - len(arr) if arr else 0

    //? Python Solution-2
    // consecutive=lambda a:len(a)and-~max(a)-min(a)-len(a)
