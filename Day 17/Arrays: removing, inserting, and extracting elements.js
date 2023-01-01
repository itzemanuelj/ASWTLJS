///What keyword removes the first element of an array?
let a = b.shift(); //!removes only first

///What keyword adds one or more elements to the beginning of an array?
let c = d.unshift(); //!adds first and more elements

///What keyword inserts new elements anywhere in an array and/or removes elements from an array?
let e = f.splice(); //! adds anywhere

///What keyword removes copies elements from an array to another array?

let g = h.splice(); //!

/// add "cake" and "cookie" to the beginning of the array sweets.

let sweets = sweets.unshift("cake", "cookie");

let sizes = ["S", "M", "XL", "XXL", "XXXL"];
/// Insert "L" into the array between "M" and "XL".

sizes.splice(2, 0, "L");

let sizes1 = ["S", "M", "XL", "XXL", "XXXL"];
/// Copy the first 3 sizes of the array and put them into a new array, regSizes.

let RegSizes = sizes1.slice(0, 3);

///Remove the first element of an array.
let arr = arr.shift();

/// Add three number elements to the beginning of an array.
let number = number.unshift("1", "2", "3");

let pets = ["dog", "cat", "ox", "duck", "frog"];
/// Add 2 elements after "dog" and remove "cat", "ox", and "duck".

pets.splice(1, 3, "fish", "monkey");

let animals = ["dog", "cat", "ox", "duck", "frog"];
/// Remove "cat" and "ox".

animals = animals.splice(1, 2);

let pets2 = ["dog", "cat", "ox", "duck", "frog", "flea"];

/// Reduce it to "duck" and "frog" using slice.

pets2 = pets2.slice(3, 5);
