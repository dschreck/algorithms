const swap = (input, i, j) => {
  const tmp = input[i];
  input[i] = input[j];
  input[j] = tmp;
  return input;
}

const insertSort = function(unsorted) {
  const n = unsorted.length;
  const sorted = Array(n);

  sorted[0] = unsorted[0];

  let selected;

  for (let i = 1; i < n; i++) {
    selected = unsorted[i];
    let j = i;

    while (j > 0 && unsorted[j - 1] > selected) {
      sorted[j] = sorted[j - 1];
      j--;
    }
    sorted[j] = selected;
  }

  return sorted;
}

const selectSort = function(input) {
  const len = input.length;

  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (input[j] < input[min]) {
        min = j;
      }
    }
    if (i !== min) {
      input = swap(input, i, min);
    }
  }

  return input;
}

const bubbleSort = function(input) {
  const len = input.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0, stop = len - i; j < stop; j++) {
      if (input[j] > input[j+1]) {
        input = swap(input, j, j+1);
      }
    }
  }
  return input;
}

module.exports = {
  insertSort,
  selectSort,
  bubbleSort
}