"use strict";

// function doLast(array) {
//   array[array.length - 1];
// }
//
// function doSort(array) {
//   array.sort();
// }
//
// function doReverse(array) {
//   array.reverse();
// }
//
// function doShuffle(array) {
//   array.sort(function(){ return 0.5 - Math.random(); });
// }
//
// function doUnshiftOneElement(array) {
//   array.unshift(0);
// }

function doAssignToGroups(listOfStudents) {
  assignStudentsToGroups(listOfStudents, 4);
}

function doAltAssignToGroups(listOfStudents) {
  differentAssignGroupsMethod(listOfStudents, 4);
}

(function() {
// test(method, label, repetitions, arrayStepSize, arrayNumberOfSteps)
  // test(doLast, "last", 10, 100000, 20);
  // test(doReverse, "reverse", 20, 20000, 20);
  // test(doSort, "sort", 5, 20000, 20);
  // test(doShuffle, "shuffle", 5, 5000, 20);
  // test(doUnshiftOneElement, "unshift", 20, 20000, 20);

  // test(doAssignToGroups, "assign students to groups", 20, 10000, 20);
  test(doAltAssignToGroups, "assign students to groups, method 2", 50, 10000, 20);
  // test(containsDuplicate, "check for duplicate", 5, 1000, 20);
  test(anotherDuplicateCheck, "check for duplicate, method 2", 5, 10000, 20);
  // test(shuffle, "shuffle array", 5, 1000, 20);
  test(gentleShuffle, "gently shuffle array", 5, 10000, 20);
})();
