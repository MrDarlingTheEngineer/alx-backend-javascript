/* eslint-disable */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    (function () {
      var task = true;
      var task2 = false;
    })();
  }

  return [task, task2];
}
