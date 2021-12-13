const temperature = -41;
const raining = true;
const cold = false
const isCitizen = true;
const age = 26;


if (temperature < 0 || cold) {
  console.log("Make sure you pick out a scarf!");
}else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea.");
} else {
  console.log("Now you're ready to go outside!")
}

if (raining) {
  console.log("Don't forget your umbrella!");
} else if (!raining) {
  console.log("Leave you umbrella at home!");
}




if (isCitizen && age > 18) {
  console.log("You are eligible to vote.")
}
