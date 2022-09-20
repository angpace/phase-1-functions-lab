// Code your solution in this file!
function distanceFromHqInBlocks(numberOfBlocks){
    if (numberOfBlocks < 42){
      return 42 - numberOfBlocks}
    else if (numberOfBlocks > 42){
        return numberOfBlocks - 42
    };
}
function distanceFromHqInFeet(numberOfBlocks){
    return distanceFromHqInBlocks(numberOfBlocks) * 264;
}
function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination) * 264}
    else if (start < destination){
        return (destination - start) * 264};
}
console.log(distanceTravelledInFeet(43,48));
console.log(distanceTravelledInFeet(50,60));
function calculatesFarePrice(start, destination) {
   let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400){
        return 0}
    else if (distanceInFeet > 400 && distanceInFeet < 2000){
        return (distanceInFeet - 400) * .02}
    else if (distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25}
    else if (distanceInFeet > 2500) {
        return `cannot travel that far`
    };
}