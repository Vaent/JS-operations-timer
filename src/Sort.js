"use strict";

function selectionSort(array) {
  let tempArray = array.slice(0),
    sortedArray = [];
  while (tempArray.length > 0) {
    let minValueWithIndex = [tempArray[0], 0];
    for (let i = 1; i < tempArray.length; i++) {
      if (tempArray[i] === minValueWithIndex[0]) {
        minValueWithIndex.push(i); // record all indices that hold the minValue
      } else if (tempArray[i] < minValueWithIndex[0]) {
        minValueWithIndex = [tempArray[i], i];
      }
    }
    for (let i = minValueWithIndex.length - 1; i > 0; i--) {
      [tempArray[minValueWithIndex[i]], tempArray[tempArray.length - 1]] =
      [tempArray[tempArray.length - 1], tempArray[minValueWithIndex[i]]];
      sortedArray.push(tempArray.pop());
    }
  }
  return sortedArray;
}

function mergeSort(array) {
  let tempArray = array.slice(0);
  if (array.length < 2) {
    return array;
  } else if (array.length === 2) {
    if (array[0] > array[1]) {
      [array[0], array[1]] = [array[1], array[0]];
    }
    return array;
  } else {
    let firstHalfSorted = mergeSort(array.slice(0, Math.ceil(array.length / 2))),
      secondHalfSorted = mergeSort(array.slice(Math.ceil(array.length / 2)));
    let mergedArray = [],
      firstIndex = 0,
      secondIndex = 0;
    while (firstIndex < firstHalfSorted.length
    && secondIndex < secondHalfSorted.length) {
      if (firstHalfSorted[firstIndex] <= secondHalfSorted[secondIndex]) {
        mergedArray.push(firstHalfSorted[firstIndex]);
        firstIndex ++;
      } else {
        mergedArray.push(secondHalfSorted[secondIndex]);
        secondIndex ++;
      }
    }
    return mergedArray.concat(firstHalfSorted.slice(firstIndex))
    .concat(secondHalfSorted.slice(secondIndex));
    // slice returns an empty array if the start index is >= the array length
    // concat with an empty array returns the original array unmodified
    // so only the half which has not been completely added comes into play
  }
}
