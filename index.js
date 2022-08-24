let a = ['Billy', 'Broddy', 'Jack', 'Nate', 'Dakota'];
const returnFirstTwoDrivers = function(a) {
    return a.slice(0, 2);
}
const returnLastTwoDrivers = function(a) {
    return a.slice(a.length-2);
}
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multiply){
    
    return num => multiply * num 
}
 function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
 }
 function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
 }
const selectDifferentDrivers = function(a, returnTwoDrivers) {
    return returnTwoDrivers(a);

    
}
