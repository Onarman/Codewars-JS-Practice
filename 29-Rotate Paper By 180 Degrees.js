//!---------Rotate Paper By 180 Degrees-------//

// You are given a digital number written down on a sheet of paper.

// Your task is to figure out if you rotate the given sheet of paper by 180 degrees would the number still look exactly the same.

// Note: You can assume that the digital number is written like the following image:


// Example
// For number = "1", the result should be false

// For number = "29562", the result should be true.

// For number = "77", the result should be false.

// Input/Output
// [input] string number
// sequence of digital digits given as a string.

// [output] a boolean value
// true if you rotate the given sheet of paper by 180 degrees then the number still look exactly the same. false otherwise.

//? Solution 
function rotatePaper(s){
	const glyph = {2:2, 5:5, 6:9, 8:8, 9:6, 0:0};
	return Array.from(s).map(e => glyph[e]).reverse().join('') === s;
}

//? Solution - 2
const ROTATED = {0: 0, 2: 2, 5: 5, 6: 9, 8: 8, 9: 6};

const rotatePaper = number => [...number].map(dgt => ROTATED[dgt]).reverse().join`` === number;


//? Solution Python
// def rotate_paper(number):
//     return number == number.translate(str.maketrans('69', '96', '1347'))[::-1]