function rotateLeft(arr, rotationCount) {
  for (let i = 0; i < rotationCount; i++) {
    let firstElement = arr.shift();
    arr.push(firstElement);
  }
  return arr;
}
const rotateLeftData = rotateLeft([1, 2, 3, 4, 5], 4)
console.log(rotateLeftData);