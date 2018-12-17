"use strict";

let repetitions = 100000,
  cutoff = 20000,
  arrayStepSize = 5000,
  arrayNumberOfSteps = 10;

function runTests() {
  testLast();
  testReverse();
}

function testLast() {
  console.log("Test 'last' method");
  let testArray = [];
  for (let i = 1; i <= arrayNumberOfSteps; i++) {
    for (let j = 1; j <= arrayStepSize; j++) {
      testArray.push(1);
    }
    let result = loopLastEntry(testArray);
    console.log(
      `[${i * arrayStepSize}]: ${repetitions} operations completed in ${result.toFixed(1)}ms`
    );
  }
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
  console.log("Test 'reverse' method");
  let testArray = [];
  for (let i = 1; i <= arrayNumberOfSteps; i++) {
    for (let j = 1; j <= arrayStepSize; j++) {
      testArray.push(1);
    }
    let result = loopReverse(testArray);
    console.log(
      `[${i * arrayStepSize}]: ${repetitions} operations completed in ${result.toFixed(1)}ms`
    );
  }
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
