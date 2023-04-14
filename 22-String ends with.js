//------String ends with?-----//

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//? Solution JS

function solution(str, ending){
    if (ending.length === 0){
      return true
    }
    let sliced =str.slice(-ending.length)
    const res = sliced === ending ? true : false
    return res
  }
  
  console.log(solution("abcde",""))

//? Solution JS-2

  function solution(str, ending){
    return str.endsWith(ending);
  }

//? Solution Python

// def solution(string, ending):
//     return string.endswith(ending)