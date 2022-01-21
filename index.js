// function squareValue(value) {
//   return value * value;
// }

// function calculateSum() {
//   let value = 2;

//   value = squareValue(value);

//   return value;
// }

// document.querySelector(".result").innerHTML = calculateSum();

// console.log(squareValue(3));

// var arr = [1, 2, 3];

// var arrCopy = arr;

// console.log(arr);
// console.log(arrCopy);

// arr.push(4);

// console.log(arr);
// console.log(arrCopy);

// var obj = new Object();

// obj.prop = "some val";

// console.log(obj);

// function objConstructor(val) {
//   this.prop = val;
// }

// var obj = new objConstructor("Hey");
// var obj1 = new objConstructor("Hello");

// objConstructor.prototype.showVal = function () {
//   console.log("the val is " + this.prop);
// };

// obj.showVal();
// obj1.showVal();

// function objConstructor(val) {
//   this.prop = val;
// }

// new objConstructor("hello");

let cash = 105;

let amount = 0;

let phonesBought = 0;
let accessoriesBought = 0;

let message = "";

function buyPhones(cash) {
  const PHONE_PRICE = 10;
  const ACCESSORY_PRICE = 5;
  const TAX_RATE = 0.3;

  let taxesToPay = 0;

  if (cash > amount) {
    amount += PHONE_PRICE;
    phonesBought++;

    console.log(amount);

    if (cash > amount) {
      amount += ACCESSORY_PRICE;
      accessoriesBought++;

      buyPhones(cash);
    } else {
      message =
        "You can buy " +
        phonesBought +
        " phones and " +
        accessoriesBought +
        " accessories";
    }
  } else {
    message =
      "You can buy " +
      phonesBought +
      " phones and " +
      accessoriesBought +
      " accessories";
  }
}

buyPhones(cash);

console.log(message);

console.log(amount);
