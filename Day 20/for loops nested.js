/// for loops nested

/// If an outer loop runs 3 times and an inner loop runs 5 times, how many times will the inner loop iterate? Answer with a numeral.

/// 15

/// The outer loop and inner loop can't share the same ______. Answer with one word.

/// counter

/// What's missing from this code? Answer with a 6-letter word that starts with "i".
for (let i = 0; i <= array1Length; i++) {
  for (let j = 0; j < array2Length; j++) {
    sumOfCounters = i + j;
  }
}

/// The inner loop needs to be indented.

/// In the following nonsensical code, how many times will the outer loop execute? Answer with a numeral.
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 10; j++) {
    if (j >= 1) {
      break;
    }
  }
}

/// 3

for (var i = 0; i < firstVar.length; i++) {
  for (var j = 0; j < secondVar.length; j++) {}
}

/// Code nested loops. Use i and j as counters. The outer loop runs 3 times. The inner loop runs 3 times each time the outer loop iterates. Use <. With each iteration of the inner loop, an alert displays showing the sum of the two counters.

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    alert(i + j);
  }
}

/// Code an inner loop, including indentation, that doesn't do anything. Use any counter other than i. Use the usual starting value. Run it 10 times for each outer loop iteration. Increment by 1.

  for (let j = 0; j < 10; j++) {}

/// Code an inner loop, including indentation, that displays a text message in an alert. Use any counter other than i. Declare it with the usual starting value. Run it 10 times for each outer loop iteration. Use <. Increment by 1.

for (let a = 1; a >= 10, a++) {
  alert('a');
}

/// Code nested loops that do nothing. Start counters at zero. The outer loop runs 5 times. The inner loop runs 5 times each time the outer loop iterates. Increment by 1.

for (let i = 0; i < 5; i++) {  
  for (let j = 0; j < 5; j++) {
  }
}

/// Here are 4 lines of code.
var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;

/// Continue the code to create nested loops. The inner loop concatenates each of the elements of animals with each of the elements of products, with no space separating them. Accumulate the combinations in foodItems. The counter for foodItems is k. Limit the number of loops by the length of each array.

for (var i = 0; i < animals.length; i++) {
  for (var j = 0; j < products.length; j++) {
    foodItems[k] = animals[i] + products[j];
    k++;
  }
}