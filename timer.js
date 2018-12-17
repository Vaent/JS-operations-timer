"use strict";

let repetitions = 10000,
  arrayStepSize = 5000,
  arrayNumberOfSteps = 10;

function runTests() {
  test(timeToGetLastEntry, "last");
  test(timeToReverse, "return");
}

function test(method, label) {
  console.log(`Test '${label}' method`);
  repeat(method);
}

function repeat(method) {
  let testArray = [];
  for (let i = 1; i <= arrayNumberOfSteps; i++) {
    extend(testArray);
    let result = loopCall(method, testArray);
    printToConsole(i * arrayStepSize, result);
  }
}

function extend(array) {
  for (let i = 1; i <= arrayStepSize; i++) {
    array.push(1);
  }
}

function printToConsole(arraySize, result) {
  console.log(`[${arraySize} entries]:`);
  console.log(
    `  ${repetitions} operations completed in ${result.toFixed(1)}ms`
  );
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

(function() {
  document.addEventListener("load", runTests());
})();
