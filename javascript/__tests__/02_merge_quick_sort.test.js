import { mergeSort } from '../02_merge_quick_sort';

const unsorted = [3, 8, 5, 4, 1, 9, -2];
const sorted = [-2, 1, 3, 4, 5, 8, 9];

test('merge sort', async () => {
    expect(mergeSort(unsorted)).toEqual(sorted);
});

// test('select sort', async () => {
//     expect(selectSort(unsorted)).toEqual(sorted);
// });

// test('bubble sort', async () => {
//     expect(bubbleSort(unsorted)).toEqual(sorted);
// });
