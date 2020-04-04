var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function upperCase(a, b, c, d, e) {
  return [
    a.toUpperCase(),
    b.toUpperCase(),
    c.toUpperCase(),
    d.toUpperCase(),
    e.toUpperCase(),
  ];
}
function shoutyGreeting(a, b, c, d, e) {
  let upperNames = upperCase(a, b, c, d, e);

  return (
    "HELLO" +
    upperNames[0] +
    " HELLO " +
    upperNames[1] +
    " HELLO " +
    upperNames[2] +
    " HELLO " +
    upperNames[3] +
    " HELLO " +
    upperNames[4]
  );
}
console.log(shoutyGreeting(mentor1, mentor2, mentor3, mentor4, mentor5));
