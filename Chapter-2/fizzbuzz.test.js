// Code

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let result = "";
    if (i % 3 == 0) {
      result += "Fizz";
    }
    if (i % 5 == 0) {
      result += "Buzz";
    }

    console.log(result || i);
  }
}

/*
First attempt
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
*/

// Tests

test("loops from 1 through 100, and logs fizz when number divisible by three, buzz when divisible by 5 and fizzbuzz when divisible by 15", () => {
  expext();
});