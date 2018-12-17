"use strict";

let repetitions = 100000,
  cutoff = 20000;

function runTests() {
  testLast();
  testReverse();
}

function testLast() {
  let testArray = [1, 2, 3, 4];
  let result = loopLastEntry(testArray);
  console.log(
    `Small array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );

  testArray = ["a", "fgdnjk", "qwrtyrupbd", "dfg", "xcvbnm"];
  result = loopLastEntry(testArray);
  console.log(
    `Text array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );

  testArray = [];
  for (let i = 0; i < 10000; i++) {
    testArray.push(1);
  }
  result = loopLastEntry(testArray);
  console.log(
    `Big array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );
}

function loopLastEntry(array) {
  let tracker = 0;
  for (let i = 0; i < repetitions + cutoff; i++) {
    if (i === cutoff) tracker = 0;
    let startTime = window.performance.now();
    array[array.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
  }
  return tracker;
}

function testReverse() {
  let testArray = [1, 2, 3, 4];
  let result = loopReverse(testArray);
  console.log(
    `Small array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );

  testArray = ["a", "fgdnjk", "qwrtyrupbd", "dfg", "xcvbnm"];
  result = loopReverse(testArray);
  console.log(
    `Text array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );

  testArray = [];
  for (let i = 0; i < 10000; i++) {
    testArray.push(1);
  }
  result = loopReverse(testArray);
  console.log(
    `Big array: ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );
}

function loopReverse(array) {
  let tracker = 0;
  for (let i = 0; i < repetitions + cutoff; i++) {
    if (i === cutoff) tracker = 0;
    let startTime = window.performance.now();
    array.reverse();
    let endTime = window.performance.now();
    tracker += endTime - startTime;
  }
  return tracker;
}

(function() {
  document.addEventListener("load", runTests());
})();
