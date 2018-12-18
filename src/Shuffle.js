"use strict";

function shuffle(array) {
  let originalArray = array.slice(0);
  for (let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * originalArray.length);
    array[i] = originalArray.splice(randomIndex, 1)[0];
  }
}
