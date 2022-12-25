///The slice() method extracts a section of a string and returns 
///it as a new string, without modifying the original string.

/// same in array but you select elements not characters  

const arr=[1,2,3,4,5];

const slicedArray = arr.slice(1, 4);

/// slicedArr = [2,3,4]

///https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
//!! starts at  index of 2 camel 

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
//!! ends at index of 4 

console.log(animals.slice(1, 5));

slice()
slice(start)
slice(start, end)
