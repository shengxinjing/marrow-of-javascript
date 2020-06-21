
var y = "outer";
function f() {
  console.log(y); // undefined
  console.log(x); // throw a Exception
  let x = 100;
  var y = 100;
}
f()