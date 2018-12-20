"use strict";

function selectionSort(array) {
  // given an array of values with the same data type
  // produce an array with the same values sorted from lowest to highest

  // (copy array first & operate on copy)
  // let sortedArray = [];
  // while array.length > 0
  //   let minValueWithIndex = [array[0], 0];
  //   for i = 0; i < array.length; i++
  //     if array[i] === minValueWithIndex[0]
  //       minValueWithIndex.push(i); // record all indices that hold the minValue
  //     else if array[i] < minValueWithIndex[0]
  //       minValueWithIndex = [array[i], i];
  //   for i = minValueWithIndex.length - 1; i > 0; i--
  //     array[i] swap with array[array.length - 1]
  //     sortedArray.push(array.pop);
  // return sortedArray;
}

function mergeSort(array) {
  // given an array of values with the same data type
  // produce an array with the same values sorted from lowest to highest

  // (copy array first & operate on copy)
  // if array.length < 2
  //   return array;
  // else if array.length === 2
  //   if array[0] > array[1]
  //     array[0] swap with array[1]
  //   return array;
  // else
  //   let firstHalf = array.slice(0, Math.ceil(array.length / 2)),
  //     secondHalf = array.slice(Math.ceil(array.length / 2));
  //   mergeSort each half
  //   let mergedArray = [],
  //     firstIndex = 0,
  //     secondIndex = 0;
  //   while firstIndex < firstHalf.length && secondIndex < secondHalf.length
  //     if firstHalf[firstIndex] <= secondHalf[secondIndex]
  //       mergedArray.push(firstHalf[firstIndex]);
  //       firstIndex ++;
  //     else
  //       mergedArray.push(secondHalf[secondIndex]);
  //       secondIndex ++;
  //   return mergedArray.concat(firstHalf.slice[firstIndex])
  //     .concat(secondHalf.slice[secondIndex]);
  //   // slice returns an empty array if the start index is >= the array length
  //   // concat with an empty array returns the original array unmodified
  //   // so only the half which has not been completely added comes into play
}
