const clean = (str) => str.toLowerCase().replace(/[\W_]/g, '');

const isPalindrome = (str) => {
  const cleanStr  = clean(str);
  const reverseStr = cleanStr.split('').reverse().join('');
  return reverseStr === cleanStr;
}

const palindromeProximity = (str) => {
  const cleanStr = clean(str);
  const halfLen = Math.ceil(cleanStr.length / 2);

  // split into two halfs
  let leftStr = cleanStr.substring(0, halfLen);
  let rightStr = cleanStr.substring(halfLen);
  
  // if there's an letter in the middle it doesn't matter, drop it.
  if (leftStr.length > rightStr.length) {
    leftStr = leftStr.substring(0, leftStr.length - 1);
  }

  rightStr = rightStr.split('').reverse().join('');

  const matrix = [];

  for(let i = 0; i <= rightStr.length; i++) {
    matrix[i] = [i];
  }
  
  for(let i = 0; i <= leftStr.length; i++) {
    matrix[0][i] = i;
  }

  for(let i = 1; i <= rightStr.length; i++) {
    for (let j= 1; j <= leftStr.length; j++) {
      if(rightStr[i - 1] == leftStr[j - 1]) {
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        let sub = matrix[i - 1][j - 1] + 1;
        let ins = matrix[i][j - 1] + 1;
        let del = matrix[i - 1][j] + 1;
        matrix[i][j] = Math.min(sub, Math.min(ins, del));
      }
    }
  }

  const levenshteinDistance = matrix[rightStr.length][leftStr.length];
  const proximity = (1 - (levenshteinDistance / leftStr.length)) * 100;

  return proximity.toFixed(2) + '%';

}