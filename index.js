// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
let  selectingDrivers = [returnFirstTwoDrivers(drivers), returnLastTwoDrivers(drivers)]

function createFareMultiplier(num){
    return function fareMultiply(){
        return num * num
    }
}
const createFare = createFareMultiplier(num)
function fareDoubler(fare){
    return fare * 2
}
function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, fn){
    if(fn === returnFirstTwoDrivers){
        return arrayOfDrivers[0]
    }else{
        return arrayOfDrivers[1]
    }
    
}