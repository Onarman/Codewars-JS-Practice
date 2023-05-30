//----Find Cracker-----//

// Someone was hacking the score. Each student's record is given as an array The objects in the array are given again as an array of scores for each name and total score. ex>

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
// ];
// The scores for each grade is:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// Everything else: 0 points
// If there are 5 or more courses and all courses has a grade of B or above, additional 20 points are awarded. After all the calculations, the total score should be capped at 200 points.

// Returns the name of the hacked name as an array when scoring with this rule.

// var array = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],     // name1 total point is over 200 => hacked
//   ["name2", 110, ["B", "A", "A", "A"]],               // name2 point is right
//   ["name3", 200, ["B", "A", "A", "C"]],               // name3 point is 200 but real point is 90 => hacked
//   ,
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]] // name4 point is right
// ];

// return ["name1", "name3"];

//? Solution

function findHack(records) {
	return records
	  .filter(([name, reportedScore, grades]) => {
		const gradePoints = {
		  A: 30,
		  B: 20,
		  C: 10,
		  D: 5,
		};
  
		const totalPoints = grades.reduce((total, grade) => total + (gradePoints[grade] || 0), 0);
		const extraPoints = grades.length >= 5 && grades.every((grade) => grade === "B" || grade === "A") ? 20 : 0;
		const calculatedScore = Math.min(totalPoints + extraPoints, 200);
  
		return calculatedScore !== reportedScore;
	  })
	  .map(([name]) => name);
  }
  
  var array = [
	["name1", 445, ["B", "A", "A", "C", "A", "A"]],
	["name2", 110, ["B", "A", "A", "A"]],
	["name3", 200, ["B", "A", "A", "C"]],
	["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]]
  ];
  
  var hackedStudents = findHack(array);
  console.log(hackedStudents);

  //? Solution-Python

//   scores = {"A": 30, "B": 20, "C": 10, "D": 5}

// def find_hack(arr):
//     return [name for name, score, grades in arr if scoring(grades) != score]

// def scoring(grades):
//     score = sum(scores.get(grade, 0) for grade in grades)
//     bonus = 20 if set(grades) <= {"A", "B"} and len(grades) > 4 else 0
//     return min(score + bonus, 200)