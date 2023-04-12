//--------No oddities here-------//

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//? solution

function noOdds( values ){
    let arr = []
    for(i = 0;i < values.length;i++){
      values[i] % 2 === 1 ? null : arr.push(values[i])
    }
    return arr
  }
//? solution - 2
  var noOdds = values => values.filter(x => !(x % 2));

  //? solution Ptyhon
//! def no_odds(values):
//!     return [i for i in values if i % 2 == 0]