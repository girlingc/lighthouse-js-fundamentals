function range(start, end, step) {
  let num = [];
  let current = start;
  while (current <= end) {
    if (step <= 0 ) {
      break;
    } else {
      num.push(current);
      current = current + step;
    }
  } 
  return num;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));