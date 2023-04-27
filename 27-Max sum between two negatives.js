//!----------Max sum between two negatives-----------//

// You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements. No negative element should be present in the sum. If there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell, None for Rust.

// Example
// [4, -1, 6, -2, 3, 5, -7, 7] -> 8
//      ^      ^         ^
// Sum between -1 and -2 is 6, between -2 and -7 is 3 + 5 = 8. It's also not 14 (between -1 and -7), because this includes a negative number (-2).

//? Solution-1

function maxSumBetweenTwoNegatives(a) {
    let res =[];

    for(let i = 0;i < a.length;i++){
        if(a[i]>= 0) continue;
        for (let j = i + 1;j<a.length; j++){
            if(a[j] < 0){
                res.push(a.slice(i+1,j));
                i=j;
            }
        }
    }
    
    return res.length > 0 ? Math.max(...res.map(e => e.reduce((a,b)=> a + b,0)),0): -1
  }

  //? Solution Python
  
//   def max_sum_between_two_negatives(arr):
//   idxs = [i for i, x in enumerate(arr) if x < 0]
//   return max((sum(arr[i+1:j]) for i, j in zip(idxs, idxs[1:])), default=-1)