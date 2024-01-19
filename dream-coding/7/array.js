'use strict';

// Araay 🎉

// 1. Declatation
const arr1 = new Array();
const arr2 = [1, 2];


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); // (2) ['🍎', '🍌'] 0: "🍎" 1: "🍌" length: 2
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined


// 3. Looping over an array
// print all fruits
// a. for 
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach (callbackfn를 받아 옴)
// fruits.forEach(function (fruits, index){
//     console.log(fruits, index);
// });
fruits.forEach((fruit) => console.log(fruit));


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍓','🍑'); 
console.log(fruits); // (4) ["🍎", "🍌", "🍓", "🍑"]

// add: remove an item from the end
fruits.pop(); // (3) ["🍎", "🍌", "🍓"]
fruits.pop(); // (2) ["🍎", "🍌"]
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('🍓','🍋');
console.log(fruits); // (4) ["🍓", "🍋", "🍎", "🍌"]


// shiftremove an item from the benigging
fruits.shift(); // (3) ["🍋", "🍎", "🍌"]
fruits.shift(); // (2) ["🍎", "🍌"]
console.log(fruits); 

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // (5) ["🍎", "🍌", "🍓", "🍑", "🍋"]

// splice(start: number, deleteCount?: number): string[] // ?(optional)
// fruits.splice(1); // ["🍎"]
fruits.splice(1, 1); // 1: 🍌
console.log(fruits); // (4) ["🍎", "🍓", "🍑", "🍋"]

fruits.splice(1, 1, '🍏', '🍉');
console.log(fruits); // (5) ["🍎", "🍏", "🍉", "🍑", "🍋"]

// combine two arrays
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (7) ["🍐", "🥥", "🍎", "🍏", "🍉", "🍑", "🍋"]

 // 5. Searching
 // indexOf: find the index
 console.clear();
 console.log(fruits); // (5) ["🍎", "🍏", "🍉", "🍑", "🍋"]
 console.log(fruits.indexOf('🍎'));  // 0
 console.log(fruits.indexOf('🍉'));  // 2
 console.log(fruits.indexOf('🥥'));  // -1

 // includes
 console.log(fruits.includes('🍉')); // true
 console.log(fruits.includes('🥥')); // false
 
// lastIndexOf
console.clear();
fruits.push('🍎');  // (6) ["🍎", "🍏", "🍉", "🍑", "🍋", "🍎"]
console.log(fruits);
console.log(fruits.indexOf('🍎'));     // 0
console.log(fruits.lastIndexOf('🍎')); // 5