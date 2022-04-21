
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(veggies, score) {
  const highestScore = Math.max(...veggies.map(submission => submission[score]))
  return veggies.find(submission => submission[score] === highestScore).submitter
}
console.log(judgeVegetable(vegetables, metric))

