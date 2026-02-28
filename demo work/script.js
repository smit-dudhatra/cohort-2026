age = 32;

console.log("Current age:", age , "Voting allowed:", isAgeAllowed());

var age = 5;

function isAgeAllowed() {
  if (age > 18) {
    return true;
  }
  return false;
}
