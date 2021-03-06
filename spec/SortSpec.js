"use strict";

describe ("Sorting an array", function() {
  let testArray;

  beforeEach (function() {
    testArray = [];
    for (let i = 0; i < 100; i++) {
      testArray.push(Math.floor(Math.random() * 100));
    }
  });

  describe ("selectionSort", function() {
    it ("does not change the original array", function() {
      let referenceArray = testArray.slice(0);
      selectionSort(testArray);
      expect(testArray).toEqual(referenceArray);
    });
    it ("length of the sorted array is the same as the original", function() {
      let sortedArray = selectionSort(testArray);
      expect(testArray.length).toEqual(sortedArray.length);
    });
    it ("retains each of the elements in the original array", function() {
      let sortedArray = selectionSort(testArray);
      while (testArray.length > 0) {
        let sortedIndex = sortedArray.indexOf(testArray[testArray.length - 1]);
        expect(sortedIndex).not.toEqual(-1);
        sortedArray[sortedIndex] = sortedArray[sortedArray.length - 1];
        sortedArray.pop();
        testArray.pop();
        // remove checked values to ensure duplicates are not lost
      }
    });
    it ("sorts the values from low to high", function() {
      let sortedArray = selectionSort(testArray);
      for (let i = 0; i < sortedArray.length - 1; i++) {
        expect(sortedArray[i]).toBeLessThanOrEqual(sortedArray[i + 1]);
      }
    });
  });

  describe ("mergeSort", function() {
    let variants = [mergeSort, threeBaseMergeSort];
    variants.forEach (function(variant) {
      describe (variant.name, function() {
        it ("does not change the original array", function() {
          let referenceArray = testArray.slice(0);
          variant(testArray);
          expect(testArray).toEqual(referenceArray);
        });
        it ("length of the sorted array is the same as the original", function() {
          let sortedArray = variant(testArray);
          expect(testArray.length).toEqual(sortedArray.length);
        });
        it ("retains each of the elements in the original array", function() {
          let sortedArray = variant(testArray);
          while (testArray.length > 0) {
            let sortedIndex = sortedArray.indexOf(testArray[testArray.length - 1]);
            expect(sortedIndex).not.toEqual(-1);
            sortedArray[sortedIndex] = sortedArray[sortedArray.length - 1];
            sortedArray.pop();
            testArray.pop();
            // remove checked values to ensure duplicates are accounted for
          }
        });
        it ("sorts the values from low to high", function() {
          let sortedArray = variant(testArray);
          for (let i = 0; i < sortedArray.length - 1; i++) {
            expect(sortedArray[i]).toBeLessThanOrEqual(sortedArray[i + 1]);
          }
        });
      });
    });
  });
});
