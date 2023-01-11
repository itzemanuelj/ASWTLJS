/// Code a short form of x = x + 1; Use either of the two legal expressions.
x = x++;

/// If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression? Use either of the two legal expressions.
x--;

let a = 50;
let b = a++;
/// What is the value of y?
console.log(a);

/// 50

//When the pluses come after the variable, its original value is assigned to the new variable before the incrementing variable is incremented.

let c = 50;
let d = --c;
/// What is the value of y?
console.log(y);

// 49

// When the minuses come before the variable, it is decremented before its value is assigned to the new variable. They both wind up with the same value.

let number = newNumber++;

//// n a single statement, increment the variable num and assign its new value to a second variable, newNum, which hasn't been declared beforehand.

let num = ++newNum;

/// n a single statement, decrement num and assign its original value to newNum, which hasn't been declared beforehand.

let newNum = num--;

/// Using minimal code, decrement x. Use either of the two legal expressions.
--x;

//or

x--;

/// What is the long version of x++?

x = x + 1;

/// In a single statement subtract 1 from a variable and assign the new value to another variable, which hasn't been declared beforehand. Both variables wind up with the same value.

let total = newTotal--;

/// In a single statement add 1 to a variable and assign its original value to another variable, which hasn't been declared beforehand.

let newTotal = total++;

/// Increment a variable. Use either of the two legal expressions. In a second statement, display its new value in an alert.
let time = newTime++;
alert(newTime);
