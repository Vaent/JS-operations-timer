"use strict";

function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] =
    [array[array.length - 1 - i], array[i]];
  }
}

function reverseCopy(array) {
  let copyArray = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    copyArray[i] = array[array.length - 1 - i];
  }
  return copyArray;
}

function reverseCopyStartEmpty(array) {
  let copyArray = [];
  for (let i = 0; i < array.length; i++) {
    copyArray[i] = array[array.length - 1 - i];
  }
  return copyArray;
}

function reverseCopyStartEmptyAndPush(array) {
  let copyArray = [];
  for (let i = 0; i < array.length; i++) {
    copyArray.push(array[array.length - 1 - i]);
  }
  return copyArray;
}

function otherReverseCopy(array) {
  let copyArray = array.slice(0);
  for (let i = 0; i < copyArray.length / 2; i++) {
    [copyArray[i], copyArray[copyArray.length - 1 - i]] =
    [copyArray[copyArray.length - 1 - i], copyArray[i]];
  }
  return copyArray;
}
