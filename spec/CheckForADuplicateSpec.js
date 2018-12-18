"use strict";

describe ("Check array for a duplicate", function() {
  it ("returns false if the array contains no duplicates", function() {
    let testArray = [];
    for (let i = 0; i < 1000; i++) {
      testArray.push(i);
    }
    expect(containsDuplicate(testArray)).toBe(false);
  });
  it ("returns true if the array contains at least one duplicate", function() {
    let testArray = [];
    for (let i = 0; i < 1000; i++) {
      testArray.push(i%998);
    }
    expect(containsDuplicate(testArray)).toBe(true);
  });
});

describe ("Check array for a duplicate, method 2", function() {
  it ("returns false if the array contains no duplicates", function() {
    let testArray = [];
    for (let i = 0; i < 1000; i++) {
      testArray.push(i);
    }
    expect(anotherDuplicateCheck(testArray)).toBe(false);
  });
  it ("returns true if the array contains at least one duplicate", function() {
    let testArray = [];
    for (let i = 0; i < 1000; i++) {
      testArray.push(i%998);
    }
    expect(anotherDuplicateCheck(testArray)).toBe(true);
  });
});
