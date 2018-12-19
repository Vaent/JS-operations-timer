"use strict";

describe ("Reverse array", function() {
  let testArray;

  beforeEach (function() {
    testArray = [];
    for (let i = 0; i < 100; i++) {
      testArray.push(i);
    }
  });

  describe ("reverse", function() {
    it ("reverses the array", function() {
      let referenceArray = testArray.slice(0);
      reverse(testArray);
      for (let i = 0; i < referenceArray.length; i++) {
        expect(referenceArray[i]).toEqual(testArray[testArray.length - 1 - i]);
      }
    });
  });

  describe ("reverse a copy", function() {
    let variants = [
      reverseCopy,
      reverseCopyStartEmpty,
      reverseCopyStartEmptyAndPush
    ];
    variants.forEach (function(variant) {
      describe (variant.name, function() {
        it ("reverses the copy array", function() {
          let copyArray = variant(testArray);
          for (let i = 0; i < testArray.length; i++) {
            expect(copyArray[i]).toEqual(testArray[testArray.length - 1 - i]);
          }
        });
        it ("the original array is unchanged", function() {
          let referenceArray = testArray.slice(0);
          variant(testArray);
          expect(testArray).toEqual(referenceArray);
        });
      });
    });
  });

  describe ("reverse a copy, method 2", function() {
    it ("reverses the copy array", function() {
      let copyArray = otherReverseCopy(testArray);
      for (let i = 0; i < testArray.length; i++) {
        expect(copyArray[i]).toEqual(testArray[testArray.length - 1 - i]);
      }
    });
    it ("the original array is unchanged", function() {
      let referenceArray = testArray.slice(0);
      otherReverseCopy(testArray);
      expect(testArray).toEqual(referenceArray);
    });
  });
});
