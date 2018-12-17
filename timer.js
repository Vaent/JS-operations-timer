'use strict';

(function() {
  let testArray = [1,2,3,4];
  let tracker = 0;
  for(let i=0; i<100000; i++) {
    let startTime = window.performance.now();
    testArray[testArray.length - 1];
    let endTime = window.performance.now();
    tracker += endTime - startTime;
    if(i % 10000 === 0){ console.log(tracker); }
  }
  console.log(tracker);

  // let startTime = window.performance.now();
  // for(let i=0; i<100000; i++) {
  //   testArray[testArray.length - 1];
  // }
  // let endTime = window.performance.now();
  // console.log(endTime - startTime);
})();
