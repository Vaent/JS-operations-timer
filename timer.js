'use strict';

function testLast() {
  let repetitions = 100000;

  let testArray = [1, 2, 3, 4];
  let tracker = 0;
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
    if (i % 10000 === 0) { console.log(Math.round(tracker*10)/10); }
  }
  console.log(tracker);

  testArray = ["a", "fgdnjk", "qwrtyrupbd", "dfg", "xcvbnm"];
  tracker = 0;
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
    if (i % 10000 === 0) { console.log(Math.round(tracker*10)/10); }
  }
  console.log(tracker);

  testArray = [];
  for (let i=0; i<1000000; i++) {
    testArray.push(1);
  }
  tracker = 0;
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
    if (i % 10000 === 0) { console.log(Math.round(tracker*10)/10); }
  }
  console.log(tracker);
}

function demonstrateBatchDiscrepancies() {
  let repetitions = 100000;

  let testArray = [1, 2, 3, 4];
  let tracker = 0;
  let waypoints = [];
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
    if (i % 10000 === 0) { waypoints.push(Math.round(tracker*10)/10); }
  }
  let intervals = [];
  for (let i=1; i<10; i++) {
    intervals.push(waypoints[i] - waypoints[i - 1]);
  }
  console.log(intervals);

  testArray = [1, 2, 3, 4];
  tracker = 0;
  waypoints = [];
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    if (i > 10000) { tracker += endTime - startTime; }
    if (i % 10000 === 0) { waypoints.push(Math.round(tracker*10)/10); }
  }
  intervals = [];
  for (let i=1; i<10; i++) {
    intervals.push(waypoints[i] - waypoints[i - 1]);
  }
  console.log(intervals);

  testArray = [1, 2, 3, 4];
  tracker = 0;
  waypoints = [];
  for (let i=0; i<repetitions; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    if (i > 50000) { tracker += endTime - startTime; }
    if (i % 10000 === 0) { waypoints.push(Math.round(tracker*10)/10); }
  }
  intervals = [];
  for (let i=1; i<10; i++) {
    intervals.push(waypoints[i] - waypoints[i - 1]);
  }
  console.log(intervals);
}

(function() {
  document.addEventListener("load", testLast())
})();
