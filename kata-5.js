const urlEncode = function(text) {
  const newString = text.split("")
  for (let i = 0; newString.length -1; i++) {
    let char = newString[i];

    if (char.indexOf(" ") >=0) {
      newString.splice(i, 1)
    } else {
      break;
    } 
  } for (let i = newString.length -1; i >= 0; i--) {
    let char = newString[i];

    if (char.indexOf(" ") >=0) {
      newString.splice(i, 1)
    } else {
      break;
    } 
  } let start = 0;
  let end = newString.length -1;

  while(start < end) {
    if (newString[start].indexOf(' ') >=0) {
      newString[start] = "%20"

    } start ++
  } return newString.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));