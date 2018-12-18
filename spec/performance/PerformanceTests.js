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

function doCheckDuplicate(array) {
  containsDuplicate(array);
}

function doAltCheckDuplicate(array) {
  anotherDuplicateCheck(array);
}

(function() {
// test(method, label, repetitions, arrayStepSize, arrayNumberOfSteps)
  // test(doLast, "last", 10, 100000, 20);
  // test(doReverse, "reverse", 20, 20000, 20);
  // test(doSort, "sort", 5, 20000, 20);
  // test(doShuffle, "shuffle", 5, 5000, 20);
  // test(doUnshiftOneElement, "unshift", 20, 20000, 20);

  test(doAssignToGroups, "assign students to groups", 20, 10000, 20);
  test(doAltAssignToGroups, "assign students to groups, method 2", 20, 10000, 20);
  test(doCheckDuplicate, "check for duplicate", 5, 1000, 20);
  test(doAltCheckDuplicate, "check for duplicate, method 2", 5, 1000, 20);
})();
