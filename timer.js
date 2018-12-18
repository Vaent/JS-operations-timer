"use strict";

var chartDataCollection = [];

let repetitions,
  arrayStepSize,
  arrayNumberOfSteps,
  singleTestData;

function runTests() {
  test(doLast, "last", 10, 100000, 20);
  test(doReverse, "reverse", 20, 20000, 20);
  test(doSort, "sort", 5, 20000, 20);
  test(doShuffle, "shuffle", 5, 5000, 20);
  test(doUnshiftOneElement, "unshift", 20, 20000, 20);
}

function test(method, label, repetitionsArg, arrayStepSizeArg, arrayNumberOfStepsArg) {
  [repetitions, arrayStepSize, arrayNumberOfSteps] = [repetitionsArg, arrayStepSizeArg, arrayNumberOfStepsArg]
  singleTestData = [["Array size", label]];
  repeat(method);
  chartDataCollection.push(singleTestData);
}

function repeat(method) {
  let testArray = [];
  for (let i = 1; i <= arrayNumberOfSteps; i++) {
    extend(testArray);
    let result = loopCall(testArray, method);
    singleTestData.push([i * arrayStepSize, result]);
  }
}

function extend(array) {
  for (let i = 1; i <= arrayStepSize; i++) {
    array.push(Math.random());
  }
}

function loopCall(array, method) {
  let tracker = 0;
  for (let i = 0; i < repetitions; i++) {
    tracker += timing(array, method);
  }
  return tracker;
}

function timing(array, method) {
  let startTime = window.performance.now();
  method(array);
  let endTime = window.performance.now();
  return endTime - startTime;
}

function doLast(array) {
  array[array.length - 1];
}

function doSort(array) {
  array.sort();
}

function doReverse(array) {
  array.reverse();
}

function doShuffle(array) {
  array.sort(function(){ return 0.5 - Math.random(); });
}

function doUnshiftOneElement(array) {
  array.unshift(0);
}

(function() { runTests(); })();
