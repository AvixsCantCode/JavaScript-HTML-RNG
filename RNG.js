//RNG CODE//
//Event listners
document.getElementById('btn8').addEventListener('click', btnGoClick);

//Event Handling
function btnGoClick(){
document.getElementById('output1').innerHTML = generateRandomNumber();//Outputs randomly generated Number
document.body.style.background.color
};
/**
 * Generates a number within a given supplied range
 * @param {Number} minNum - Maximum number in the range
 * @param {Number} maxNum - Minimum number in the range
 * @return {Number} randomly generated number
 */
function generateRandomNumber(minNum , maxNum) {
    minNum = Number(document.getElementById('RNG1').value);
    maxNum = Number(document.getElementById('RNG2').value);
    var numValues = maxNum - minNum + 1; //The number of digits of random chance
    return Math.floor(numValues * Math.random()) + minNum; // Generates random number based on set parameters//
};