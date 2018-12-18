"use strict";

function assignStudentsToGroups(listOfStudents, numberOfGroups) {
  // given a list of students, and desired number of groups,
  // return a list of groups,
  // each group to be of equal size (+/-1),
  // with each student being placed in one group only.

  // algorithm/pseudocode:
  // - groups = [numberOfGroups arrays]
  // - currentGroup = 0
  // - until listOfStudents is empty,
  //   - add listOfStudents.pop to groups[currentGroup]
  //   - currentGroup = (currentGroup + 1) % numberOfGroups
  // - return groups
}
