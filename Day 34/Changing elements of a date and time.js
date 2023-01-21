/// Changing elements of a date and time

/// You want to change the year of a Date object. What is the keyword?

let year = year.setFullYear(2023);

/// What is the keyword for adjusting the smallest unit of time in a Date object?

let mili = mili.setMiliSeconds(1);

/// If the original Date object is "January 1, 2001" what month is it after this statement executes? Spell out the month.

d.setMonth(7);

//august

/// To specify half a second, what number do you enclose in the parentheses?

d.setMilliseconds(500);

let month = month.setMonth(4);

/// The Date object is represented by stopDate. Its original date is December 1. Set it for the end of the month.

let stopDate = stopDate.setDate(31);

/// The Date object is represented by deadline. Change the deadline to midnight, setting hours only. Assume that minutes, seconds, and milliseconds are set to 0.

let deadline = deadline.setHours(0);

/// The Date object represented by d is the first month. Change it to the second month.

let secondMonth = secondMonth.setMonth(1);

/// Set a Date object represented by a variable of your choice to the year of the Millenium Bug.

let millium = millium.setFullYear(2000);

/// Set a Date object represented by a variable of your choice to the last second.

let lastSecond = lastSecond.setSecond(59);

/// Set a Date object represented by a variable of your choice to the last hour

let lasthour = lasthour.setHours(23);

/// Set a Date object represented by a variable of your choice that was originally "January 1, 2000 09:33:00" so it's "January 1, 2000 09:00:00".

let newYear = newYear.setMinutes(0);
