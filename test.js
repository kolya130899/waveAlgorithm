// var arr1 = [1, 2, 3, 4];

// var arr2 = arr1;

// console.log(arr2);

// arr1.push(5);

// console.log(arr2);

// var person = {
//   name: "Bill",
// };

// function setName(obj) {
//   obj.name = "Paul";
// }

// console.log(person.name);

// setName(person);
// console.log(person.name);

// var foo = "global";

// function name(foo) {
//   var foo;
//   console.log(foo);
// }

// name(foo);

// RECURSION
// const timerElement = document.querySelector(".timer");

// function timer(remainTime, maxTime) {
//   if (remainTime === maxTime) {
//     return;
//   } else {
//     setTimeout(() => {
//       remainTime++;
//       timerElement.innerHTML = remainTime;
//       timer(remainTime, maxTime);
//     }, 1000);
//   }
// }

// timer(0, 13);
// end RECURSION

// function a1(a) {
//   var a = a;
//   return function (b) {
//     return a * b;
//   };
// }

// console.log(a1(2));

// var a2 = a1();

// console.log(a2(2));

// const counter1 = document.querySelector("#c1");
// const counter2 = document.querySelector("#c2");

// const increaseCounter1 = document.querySelector("#i1");
// const increaseCounter2 = document.querySelector("#i2");

// function increaseCounter() {
//   var count = 0;
//   return function () {
//     return {
//       set: function (val) {
//         count = val;
//         return count;
//       },
//       reset: function () {
//         count = 0;
//         return count;
//       },
//       getNext: function () {
//         return ++count;
//       },
//     };
//   };
// }
// var val1 = increaseCounter();
// increaseCounter1.addEventListener("click", function () {
//   counter1.innerHTML = val1();
// });

// var val2 = increaseCounter();
// increaseCounter2.addEventListener("click", function () {
//   counter2.innerHTML = val2();
// });

// const COUNTER = document.getElementsByClassName("counter");

// Array.from(COUNTER).forEach(item => {
//   let increaseCounterObj = increaseCounter();
//   item.increaseCounter = increaseCounterObj();
// });

// document.addEventListener("click", function (e) {
//   const target = e.target;
//   const classList = target.classList;

//   if (classList.contains("increase")) {
//     const counter = target.parentElement.querySelector(".counter");
//     counter.innerHTML = counter.increaseCounter.getNext();
//   } else if (classList.contains("set-val")) {
//     const counter = target.parentElement.querySelector(".counter");
//     counter.innerHTML = counter.increaseCounter.set(3);
//   } else if (classList.contains("reset")) {
//     const counter = target.parentElement.querySelector(".counter");
//     counter.innerHTML = counter.increaseCounter.reset();
//   } else {
//     return;
//   }
// });

// CONSTRUCTOR PATTERN
function createPersonObject(name, lastname) {
  this.name = name;
  this.lastname = lastname;
  this.sayName = function () {
    console.log("I am " + name + " " + lastname);
  };
}

let person1 = new createPersonObject("Sam", "Smith");

person1.sayName();
console.log(person1);
// END CONSTRUCTOR PATTERN
