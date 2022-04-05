#include <iostream>
#include <string>
#include <cassert>

using namespace std;

bool isPalindrome(string str);
int main(){
    assert(isPalindrome("mom"));
    assert(isPalindrome("radar"));
    cout << "OK" << endl;
}
