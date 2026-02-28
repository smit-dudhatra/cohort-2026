age = 32;

console.log("Current age:", age, "Voting allowed:-", isAgeAllowed(age));

var age = 5;

function isAgeAllowed(age) {
  console.log("Inside function, age:", age);
  if (age > 18) {
    return true;
  }
  return false;
}

// in hositing concept, variable and function declaration are moved to the top of their scope before code execution.
// only declaration will be hoisted, not the initialization.
//  so in this code, the variable 'age' is declared at the top but its value is assigned later.
// when we try to access the varialbe 'age' via isAgeAllowed() function
// the age will be 32 because the function is called before the variable 'age' is assigned the value of 5.
