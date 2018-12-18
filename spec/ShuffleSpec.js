describe ("Shuffle", function() {
  let testArray;

  beforeEach (function() {
    testArray = [];
    for (let i = 0; i < 100; i++) {
      testArray.push(i);
    }
  });

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
