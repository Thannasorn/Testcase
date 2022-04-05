import unittest
 
class Calculator():
 def add_num(self, a, b):
   return a + b

 def sub_num(self, a, b):
   return a - b

 def mul_num(self, a, b):
   return a * b

 def div_num(self, a, b):
   return a / b
 
 
class MyTest(unittest.TestCase):
  def test_add(self):
     myCal = Calculator();
     self.assertEqual(myCal.add_num(2, 3), 5)

  def test_sub(self):
     myCal = Calculator();
     self.assertEqual(myCal.sub_num(7, 2), 5)

  def test_mul(self):
     myCal = Calculator();
     self.assertEqual(myCal.mul_num(5, 1), 5)

  def test_div(self):
     myCal = Calculator();
     self.assertEqual(myCal.div_num(9, 3), 3)
 
if __name__ == '__main__':
  unittest.main()
