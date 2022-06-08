const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2)
}
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = fareMultiply => {
    return (num) => fareMultiply * num
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverFunctions){
    return driverFunctions(drivers)
}
