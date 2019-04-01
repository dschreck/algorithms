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

const selectSort = function(unsorted) {
  const sorted = [];
  const n = unsorted.length;

  const swap = (input, i, j) => {
    const tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;

    return input;
  }

  for (let i = 0; i < n; i++) {

  }
}

const bubbleSort = function(input) {
  //
}

module.exports = {
  insertSort,
  selectSort,
  bubbleSort
}