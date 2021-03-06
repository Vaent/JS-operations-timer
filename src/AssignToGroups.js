"use strict";

function assignStudentsToGroups(listOfStudents, numberOfGroups) {
  let students = listOfStudents.slice(0);
  let groups = [];
  for (let i = 0; i < numberOfGroups; i++) {
    groups.push([]);
  }
  let currentGroup = 0;
  while (students.length > 0) {
    groups[currentGroup].push(students.pop());
    currentGroup = (currentGroup + 1) % numberOfGroups;
  }
  return groups;
}

function differentAssignGroupsMethod(listOfStudents, numberOfGroups) {
  let students = listOfStudents.slice(0);
  let groups = [];
  let minSizeOfGroups = Math.floor(listOfStudents.length / numberOfGroups);
  let excess = listOfStudents.length % numberOfGroups;
  while (students.length > 0) {
    let groupSize = minSizeOfGroups;
    if (excess > 0) {
      groupSize ++;
      excess --;
    }
    groups.push(students.splice(0, groupSize));
  }
  return groups;
}
