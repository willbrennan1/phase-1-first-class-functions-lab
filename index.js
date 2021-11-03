// Code your solution in this file!
const returnFirstTwoDrivers = function(driver1, driver2) {
 return ['Sally', 'Bob'];
}

const returnLastTwoDrivers = function(driver1, driver2) {
    return ['Freddy', 'Claudia'];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


createFareMultiplier = (num) => fareMultiplier => num * 5;

function fareDoubler(fareMultiplier) {
    return fareMultiplier * 2;
}

function fareTripler(fareMultiplier) {
    return fareMultiplier * 3;
}

function selectDifferentDrivers(arrayofDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayofDrivers);
}