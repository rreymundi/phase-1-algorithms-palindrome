function isPalindrome(string) {
  // Write your algorithm here
  // convert string to an array of letters
    const stringLetters = string.split('');
  // reverse the array of letters
    const reverseStringLetters = stringLetters.reverse();
  // convert array to string
    const reverseString = reverseStringLetters.join('');
  // checks whether original string is the same as reversed string
    if(string == reverseString) {
      return true;
  }
  else {
      return false;
  }
}

/* 
  write function isPalindrome that receives a string
  check string letters by turning the letters into strings
  return true if palindrome (i.e. string/letters are the same no matter the direction)
  return false if not a palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
