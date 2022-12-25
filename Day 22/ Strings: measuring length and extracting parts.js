///What is the method for extracting a segment from a string?
let a = a.splice;

///"captain" has been assigned to someWord. You want to slice "ap" out of it. Fill in the blank.
var segment = someWord.slice(1, 3);
//! The slice begins with the index-1 (the second) character and ends with the character before the index-3 (the fourth) character.

/// You want to take a slice out of the string that starts at the fifth character and goes to the end. Fill in the blank.
var segment = someWord.slice(4);
//!The fifth character is index-4. When you provide no second index, JavaScript includes all character to the end.
