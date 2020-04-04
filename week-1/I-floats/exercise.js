var numberOfStudents = 15;
var numberOfMentors = 8;

let percentageOfStudents =
  (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
let percentageOfMentors =
  (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;
console.log(
  "Percentage of students " + Math.round(percentageOfStudents),
  "Percentage of mentors " + Math.round(percentageOfMentors)
);
