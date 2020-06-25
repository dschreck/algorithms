import { isPalindrome, isPermutationOfPalindrom, palindromeProximity } from '../18_palindromes';

test('it can detect a palindome', () => {
  const valid = 'taco cat';
  const result = isPalindrome(valid);
  expect(result).toBeTruthy();
});

test('it can detect non palindomes', () => {
  const invalid = 'train car';
  const result = isPalindrome(invalid);
  expect(result).toBeFalsy();
});

test('it can detect a permutation', () => {
  const valid = 'Tact Coa';
  const result = isPermutationOfPalindrom(valid);
  expect(result).toBeTruthy();
});