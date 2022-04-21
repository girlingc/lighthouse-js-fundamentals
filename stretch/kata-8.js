const repeatNumbers = function(data) {
  for (dataSet of data) {
    return String(dataSet[0]) * String(dataSet [1])
  }
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));