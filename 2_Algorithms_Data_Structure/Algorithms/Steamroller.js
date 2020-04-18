// Flatten a nested array. You must account for varying levels of nesting.

const steamrollArray = (arr) => {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
          result = result.concat(steamrollArray(arr[i]));
      } else {
          result.push(arr[i]);
      }
  }
  return result;
}