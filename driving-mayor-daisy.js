const carPassing = function(cars, speed){
  let carPass = {
    time: Date.now(),
    speed: speed
  } 
  cars.push(carPass)
  return cars
}