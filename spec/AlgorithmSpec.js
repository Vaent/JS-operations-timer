"use strict";

describe ("Assign students to groups", function() {
  let testArray;

  beforeEach (function() {
    testArray = [];
    for (let i = 1; i < 23; i++) {
      testArray.push(`student${i}`);
    }
  });

  it ("returns the specified number of groups", function() {
    let groups = assignStudentsToGroups(testArray, 6);
    expect(groups.length).toEqual(6);
  });
  it ("variance of group size is not greater than 1", function() {
    let groups = assignStudentsToGroups(testArray, 6);
    let groupLengths = [];
    groups.forEach (function(group) {
      groupLengths.push(group.length);
    });
    let variance = Math.max(...groupLengths) - Math.min(...groupLengths);
    expect([0, 1]).toContain(variance);
  });
  it ("every student is assigned to exactly 1 group", function() {
    let groups = assignStudentsToGroups(testArray, 6);
    let referenceArray = testArray.slice(0);
    referenceArray.forEach (function(student){
      groups.forEach (function(group){
        if (group.indexOf(student) > -1) {
          group.splice(group.indexOf(student), 1);
          testArray.splice(testArray.indexOf(student), 1);
        }
      });
    });
    console.log(testArray);
    expect(testArray.length).toEqual(0);
    groups.forEach (function(group){
      expect(group.length).toEqual(0);
    });
  });
});
