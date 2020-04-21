// Intermediate Algorithm Scripting: Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

const gcd = (a, b) => {
  while (b !== 0) {
      a = [b, b = a % b][0];
  }
  return a;
}

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
}

const smallestCommons = (arr) => {
arr.sort((a,b) => a-b);
var rng = [];
for (var i = arr[0]; i <= arr[1]; i++) {
  rng.push(i);
}
return rng.reduce(lcm);
}