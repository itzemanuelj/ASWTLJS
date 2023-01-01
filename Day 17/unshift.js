//! The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));

console.log(array1);
///4,5,1,2,3

let arr = [4, 5, 6];

arr.unshift(1, 2, 3); /// pushing this first
console.log(arr);
/// 1 2 3 4 5  6

const arr1 = [1, 2];

arr1.unshift(0);

console.log(arr1);
/// 0 1 2

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
console.log(fruits);
/// lemon pineapple bannana orange apple mango
