describe ("Shuffle", function() {
  let testArray;

  beforeEach (function() {
    testArray = [];
    for (let i = 0; i < 100; i++) {
      testArray.push(i);
    }
  });

  describe("method 1", function() {
    it ("the shuffled array is still the same length", function() {
      let referenceArrayLength = testArray.length;
      shuffle(testArray);
      expect(testArray.length).toEqual(referenceArrayLength);
    });
    it ("the shuffled array contains all original values", function() {
      let referenceArray = testArray.slice(0);
      shuffle(testArray);
      referenceArray.forEach (function(entry) {
        expect(testArray).toContain(entry);
      });
    });
    it ("the array has in fact been shuffled", function() {
      let referenceArray = testArray.slice(0);
      shuffle(testArray);
      let differences = [];
      for (let i = 0; i < referenceArray.length; i++) {
        let difference = testArray.indexOf(referenceArray[i]) - i;
        if (differences.indexOf(difference) < 0) {
          differences.push(difference);
        }
      }
      expect(differences.length).toBeGreaterThan(referenceArray.length / 10);
    });
  });

  describe("method 2", function() {
    it ("the shuffled array is still the same length", function() {
      let referenceArrayLength = testArray.length;
      gentleShuffle(testArray);
      expect(testArray.length).toEqual(referenceArrayLength);
    });
    it ("the shuffled array contains all original values", function() {
      let referenceArray = testArray.slice(0);
      gentleShuffle(testArray);
      referenceArray.forEach (function(entry) {
        expect(testArray).toContain(entry);
      });
    });
    it ("the array has in fact been shuffled", function() {
      let referenceArray = testArray.slice(0);
      gentleShuffle(testArray);
      let differences = [];
      for (let i = 0; i < referenceArray.length; i++) {
        let difference = testArray.indexOf(referenceArray[i]) - i;
        if (differences.indexOf(difference) < 0) {
          differences.push(difference);
        }
      }
      expect(differences.length).toBeGreaterThan(referenceArray.length / 10);
    });
  });

  describe("shuffle a copy (not amending the original)", function() {
    it ("the shuffled array is the same length as the original", function() {
      let shuffledArray = shuffleCopy(testArray);
      expect(testArray.length).toEqual(shuffledArray.length);
    });
    it ("the shuffled array contains all original values", function() {
      let shuffledArray = shuffleCopy(testArray);
      testArray.forEach (function(entry) {
        expect(shuffledArray).toContain(entry);
      });
    });
    it ("the copy has in fact been shuffled", function() {
      let shuffledArray = shuffleCopy(testArray);
      let differences = [];
      for (let i = 0; i < shuffledArray.length; i++) {
        let difference = testArray.indexOf(shuffledArray[i]) - i;
        if (differences.indexOf(difference) < 0) {
          differences.push(difference);
        }
      }
      expect(differences.length).toBeGreaterThan(testArray.length / 10);
    });
    it ("the original array is unchanged", function() {
      let referenceArray = testArray.slice(0);
      shuffleCopy(testArray);
      expect(testArray).toEqual(referenceArray);
    });
  });
});
