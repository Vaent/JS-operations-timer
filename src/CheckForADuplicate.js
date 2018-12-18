"use strict";

function containsDuplicate(array) {
  for (let i = 0; i < array.length -1; i ++) {
    for (let j = i + 1; j < array.length; j ++) {
      if (array[i] === array[j]) { return true; }
    }
  }
  return false;
}

function anotherDuplicateCheck(array) {
  array.sort();
  for (let i = 0; i < array.length -1; i ++) {
    if (array[i] === array[i + 1]) { return true; }
  }
  return false;
}
