const merge = (left, right) => {
  const output = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      output.push(left[leftIdx]);
      leftIdx++;
    } else {
      output.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return output.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

const mergeSort = (unsorted) => {
  if (unsorted.length <= 1) {
    return unsorted;
  }

  const middle = Math.floor(unsorted.length / 2);
  const left = unsorted.slice(0, middle);
  const right = unsorted.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

export { mergeSort };
