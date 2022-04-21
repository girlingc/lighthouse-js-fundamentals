const reverse = function(str) {
  let arr = []
  for (i = (str.length - 1); i >= 0; i--) {
    arr.push(str[i])
  }
  return arr.join().replace(/,/g, '')
}


console.log(reverse(['12345', '12345']))
console.log()