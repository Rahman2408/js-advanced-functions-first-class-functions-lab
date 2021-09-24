// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  let a = [drivers[0], drivers[1]]
  return a
 }

 const returnLastTwoDrivers = function(drivers){
   let a = drivers.length
   let b = [drivers[a-2], drivers[a-1]]
   return b
 }

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

 function createFareMultiplier(num){
  return function mult(n){ return num * n}
 }

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, func) {
  return func(drivers);
}