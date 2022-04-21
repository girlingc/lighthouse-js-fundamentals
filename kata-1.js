
const sumLargestNumbers = function(data) {

  let maxValue = '';
  let secondMaxValue = '';
  for (let value of data) {
    if (value >= maxValue) {
        maxValue = value;
    } else {
      maxValue = maxValue;

    }

  }
  const index = data.indexOf(maxValue);
  if (index > -1) {
    data.splice(index, 1);
  }

  for (let value of data) {
    if(value >= secondMaxValue) {
      secondMaxValue = value;
    } else {
      secondMaxValue = secondMaxValue;
    }
  }
  return maxValue + secondMaxValue;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));