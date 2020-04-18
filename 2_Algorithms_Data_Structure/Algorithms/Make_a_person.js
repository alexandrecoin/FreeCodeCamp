// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let fullName = firstAndLast;
  let fullNameArray = fullName.split(' ');

  this.getFirstName = function() {
    return fullNameArray[0];
  };
  this.getLastName = function() {
    return fullNameArray[1];
  };
  this.setFirstName = function(newName) {
    fullNameArray[0] = newName;
  };
  this.setLastName = function(newLast) {
    fullNameArray[1] = newLast;
  };

  this.getFullName = function() {
    return this.getFirstName() + ' ' + this.getLastName();
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    fullNameArray = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
