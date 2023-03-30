//-----------Remove the parentheses----------//

// "example(unwanted thing)example"
// Your task is to remove everything inside the parentheses as well as the parentheses themselves.

// The example above would return:

// "exampleexample"
// Notes
// Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
// There can be multiple parentheses.
// The parentheses can be nested.

function removeParentheses(s){
    let r = s.replace(/\([^[]]*\)/g, '');
    return s === r ? s : removeParentheses(r);
  }
