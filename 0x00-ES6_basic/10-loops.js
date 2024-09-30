export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const arr of array) result.push(appendString + arr);

  return result;
}
