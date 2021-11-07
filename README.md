# zerosAndOnes

## Problem:

You have a string consisting of zeros, ones and asterisks (*). Consider the following operation:

Choose any two adjacent positions in the string;
If one of them is 0, and the other one is 1, remove these two digits from the string.
Find the length of the smallest string that can be obtained after applying this operation multiple times.

## Examples
For s = "01010", the output should be
zerosAndOnes(s) = 1;

For s = "111000", the output should be
zerosAndOnes(s) = 0;

For s = "111*000", the output should be
zerosAndOnes(s) = 7.


## Guaranteed constraints:
2 ≤ s.length ≤ 105.
