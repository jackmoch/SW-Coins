/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// function coinCounter (dollarAmount) {
//   // Initialize a JavaScript object to hold the coins
//   var coinPurse = {
//   };

//   coinPurse.quarters = 0;
//   coinPurse.dimes = 0;
//   coinPurse.nickels = 0;
//   coinPurse.pennies = 0;

//   for (i = dollarAmount; i >= 0.25; i -= 0.25) {
//     coinPurse.quarters ++;
//   }
//   for (i = i; i >= 0.10; i -= 0.10) {
//     coinPurse.dimes ++;
//   }
//   for (i = i; i >= 0.05; i -= 0.05) {
//     coinPurse.nickels ++;
//   }
//   for (i = i; i >= 0.01; i -= 0.01) {
//     coinPurse.pennies ++;
//   }

//   return coinPurse;
// }


// var coins = coinCounter(0.93)
// console.log("coins", coins);



// function coinCounter (dollarAmount) {
//   var quarters = {
//     quarters: dollarAmount/0.25,
//   }
//   return quarters

// }



// var coins = coinCounter(3.10)
// console.log(coins);


// 5/23/16 Notes on Functions

// function add (one, two) {
//   return one + two;
// }

// var addedNumber = add(10, 5);

// var myObject = {
//   x: 1,
//   y: 2
// };

// myObject.x = 1
// myObject.y = 2

// var newKey = "z";
// myObject[newKey] = 3;

// // console.log(myObject);

// function displayCarOptions (car) {
//   console.log(car.options);
// }

// function displayCarPreviousOwners (car) {
//   console.log(car.previousOwners);
// }

// var Honda = {
//   wheels: 4,
//   doors: 3,
//   color: "blue",
//   transmissionType: "manual",
//   underlighting: false,
//   spoiler: false,
//   mileage: null,
//   previousOwners: ["Bob", "Sue", "Xavier"],
//   options: {
//     sunRoof: true,
//     moonRoof: false
//   }
// }

// // console.log(Car.previousOwners[1]);

// var Toyota = {
//   previousOwners: ["Jim", "James", "Bob"]
// };


// displayCarOptions(Honda);
// displayCarPreviousOwners(Toyota);


function coinCounter (dollarAmount) {
  var coinPurse = {};

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickels = 0;
  coinPurse.pennies = 0;

  for (i = dollarAmount; i >= 0.25; i -= 0.25) {
    coinPurse.quarters ++
  }
  for (i = i; i >= 0.10; i -= 0.10) {
    coinPurse.dimes ++
  }
  for (i = i; i >= 0.05; i -= 0.05) {
    coinPurse.nickels ++
  }
  for (i = i; i >= 0.01; i -= 0.01) {
    coinPurse.pennies ++
  }

  return coinPurse
}

var coins = coinCounter (1.00)
console.log("coins", coins);







