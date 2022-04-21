let goodStations = []

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

function chooseStations(stations) {
  for (const station of stations) {
    const capacity = station[1]
    const stationType = station[2]
    if ((stationType === "school" || stationType === "community centre") && capacity >= 20) {
      goodStations.push(station[0])
    }
  }
  return goodStations
}
console.log(chooseStations(stations))