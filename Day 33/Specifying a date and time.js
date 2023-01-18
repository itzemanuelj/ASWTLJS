/// You're creating a Date object for the first day of the first month of the year 2000. Fill in the blank. Use the date style taught in the book.

let prevDate = new Date("Januaty 1, 2000");

/// You're creating a Date object for noon on the dot. Fill in the blank.

let prev = new Date("January 1, 2000 12:00:00");

/// What is the keyword for extracting the basic time unit you need for figuring intervals?

let Date = getTime("January 1,  2023 01:00");

/// The statement converts milliseconds to hours. Fill in the blank. Use the multiplication formula taught in the book.

let hrs = ms / 3.6e6;

let futureDate = new Date("October 30, 2099");

/// Code a statement that creates a Date object for the last day of the last month of 2020 and assigns it to dec2020, which hasn't been declared beforehand.

let dec2020 = new Date("December 31, 2020");

/// Code a statement that creates a Date object for 1 minute past midnight, New Year's Day, 2015, and assigns it to kissEnds, which has been declared beforehand.

let kissEnds = new Date("January 1, 2015 00:01:00");

/// Create a Date object for the second day of the second month of 1992 and assign it to a variable that hasn't been declared beforehand.

let secondMonth = new Date("Febuary 2, 1992");

/// Create a Date object for the first second of the first day of the first month of 1901 and assign it to a variable that hasn't been declared beforehand.

let earlyTime = new Date("January 1, 1901 00:00:01");

/// Code a single statement that displays in an alert the milliseconds that elapsed between the reference date and the beginning of 1980.

alert(new Date("January 1, 1980 ").getTime());

///Code a statement that converts the milliseconds represented by ticks to hours and assigns the result to a variable that hasn't been declared beforehand.

let timer = ticks / 3.6e6;

// let timer = ticks / (1000 * 60 * 60);

/// Code the first line of an if statement that tests whether the milliseconds represented by ms convert to more than 30 days.

if (ms / (3.6e6 * 24) > 30) {
}
