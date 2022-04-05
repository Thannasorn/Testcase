const Palindrome = require('./palindrome');

it('the empty string is a palindrome',
  () => {
    const toTest = '';
    const result = Palindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"aa" is a palindrome',
  () => {
    const toTest = 'radar';
    const result = Palindrome(toTest);

    expect(result).toBe(true);
  }
);

it('"dad" is a palindrome', 
  () => {
    const toTest = 'mom';
    const result = Palindrome(toTest);

    expect(result).toBe(true);
  });

it('"sad" is not a palindrome',
  () => {
    const toTest = 'baby';
    const result = Palindrome(toTest);

    expect(result).toBe(false);
  }
);
