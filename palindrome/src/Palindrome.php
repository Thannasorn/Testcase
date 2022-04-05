<?php

namespace App;

class Palindrome
{
    public function isPalindrome(string $word): bool
    {
        return strtolower($word) === strrev(strtolower($word));
    }
}
