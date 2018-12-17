"use strict";

var chartDataCollection = [],
  chartLegends = [],
  singleTestData;

let repetitions = 10,
  arrayStepSize = 5000,
  arrayNumberOfSteps = 20;

function runTests() {
  test(timeToGetLastEntry, "last");
  test(timeToReverse, "reverse");
  test(timeToSort, "sort");
}

function test(method, label) {
  console.log(`Test '${label}' method`);
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

(function() { runTests() })();
