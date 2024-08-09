function findMaxNumber(numbers) {
    // return Math.max(...numbers)
    let max = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        if(numbers[index] > max) {
            max = numbers[index];
        }
        
    }
    return max;
}

module.exports = findMaxNumber;
