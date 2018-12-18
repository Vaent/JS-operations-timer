"use strict";

var chartDataCollection = [];

let repetitions,
  arrayStepSize,
  arrayNumberOfSteps,
  singleTestData;

function runTests() {
  test(timeToGetLastEntry, "last", 10, 100000, 20);
  test(timeToReverse, "reverse", 20, 20000, 20);
  test(timeToSort, "sort", 5, 20000, 20);
  test(timeToShuffle, "shuffle", 5, 5000, 20);
  test(timeToUnshiftOneElement, "unshift", 20, 20000, 20);
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
    let result = loopCall(method, testArray);
    singleTestData.push([i * arrayStepSize, result]);
  }
}

function extend(array) {
  for (let i = 1; i <= arrayStepSize; i++) {
    array.push(Math.random());
  }
}

function loopCall(callback, array) {
  let tracker = 0;
  for (let i = 0; i < repetitions; i++) {
    tracker += callback(array);
  }
  return tracker;
}

function timeToGetLastEntry(array) {
  let startTime = window.performance.now();
  array[array.length - 1];
  let endTime = window.performance.now();
  return endTime - startTime;
}

function timeToReverse(array) {
  let startTime = window.performance.now();
  array.reverse();
  let endTime = window.performance.now();
  return endTime - startTime;
}

function timeToSort(array) {
  let startTime = window.performance.now();
  array.sort();
  let endTime = window.performance.now();
  return endTime - startTime;
}

function timeToShuffle(array) {
  let startTime = window.performance.now();
  array.sort(function(){ return 0.5 - Math.random(); });
  let endTime = window.performance.now();
  return endTime - startTime;
}

function timeToUnshiftOneElement(array) {
  let startTime = window.performance.now();
  array.unshift(0);
  let endTime = window.performance.now();
  return endTime - startTime;
}

(function() { runTests(); })();
