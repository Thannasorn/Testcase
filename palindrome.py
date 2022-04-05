import unittest
 
class Palindrome():
     def check(self,string):
          if(string == string[::-1]):
                return True
          return False
 
 
class TestPalindrome(unittest.TestCase):
  def test_palindrome(self):
      mypalindrome = Palindrome();
      self.assertEqual(mypalindrome.check("radar"), True)
    
if __name__ == '__main__':
  unittest.main()

  