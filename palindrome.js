const Palindrome = (test) => {
    for(let i = 0; i < Math.floor(test.length / 2); i++) {
      if (test[i] !== test[test.length - 1 - i]) {
        return false;
      }
    }
  
    return true;
  };
  
  const isPalindrome = (test) => {
    if (test === '') {
      return true;
    }
  
    if (test[0] !== test[test.length - 1]) {
      return false;
    }
  
    return Palindrome(test.substr(1, test.length - 2));
  }
  
  module.exports = Palindrome;

  