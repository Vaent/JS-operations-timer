"use strict";

var chartDataCollection = [];

let repetitions,
  arrayStepSize,
  arrayNumberOfSteps,
  singleTestData;

function test(method, label, repetitionsArg, arrayStepSizeArg, arrayNumberOfStepsArg) {
  [repetitions, arrayStepSize, arrayNumberOfSteps] = [repetitionsArg, arrayStepSizeArg, arrayNumberOfStepsArg];
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
  return tracker / repetitions;
}

function timing(array, method) {
  let startTime = window.performance.now();
  method(array);
  let endTime = window.performance.now();
  return endTime - startTime;
}
