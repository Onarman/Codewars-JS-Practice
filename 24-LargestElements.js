//--------Largest Elements-----//

// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

//? Solution-1

array.sort((a,b)=> b-a).slice(0,n).reverse()

//? Solution-2

function largest(n, array) {
    let sorted = array.sort(function(a,b){
      return b-a
    })
    return sorted.slice(0,n).reverse();
  }

  //? Python Solution-1
  
//   def largest(n,array):
//   return sorted(array)[len(array)-n:]

  //? Python Solution-2

// def largest(n,array):
//     x = sorted(array)
//     return x[len(x)-n:]