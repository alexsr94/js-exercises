function calcPercentage(num1, num2) {
  let total = num1 + num2;
  return [(num1 / total) * 100, (num2 / total) * 100];
}
function resultado(num1, num2) {
  let param = calcPercentage(num1, num2);
  return (
    "Percentage of students: " +
    param[0] +
    "% " +
    "Percentage of Masters: " +
    param[1] +
    "%."
  );
}
console.log(resultado(13, 7));
