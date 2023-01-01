//! The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//! The shift() method returns the shifted element:

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
/// 2,3

console.log(firstElement);
/// 1

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
/// orange apple mango
