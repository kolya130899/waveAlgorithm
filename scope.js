// #1 Environments

// #2 Global environment
var a = 1; // global variable

console.log(window.a);
console.log(a);

// #2 Local environment

if (a === 1) {
  var b = "b"; // this type declaration will be visible from the global scope

  const c = "c"; // these - not
  let d = "d";
}

function letters(x) {
  // all of these variables unable to use from the global scope
  var e = "e";
  let v = "v";
  const y = "y";

  console.log(this.x);
}

var letters1 = function (x) {
  console.log(this.x);
};

var letters2 = (x) => {
  console.log(this.x);
};

// console.log(e);
// console.log(v);
// console.log(y);

// console.log(b);
// console.log(d);
// console.log(c);

this.letters("x");
letters1("x1");
letters2("x2");
