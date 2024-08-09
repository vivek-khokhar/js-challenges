function findMissingNumber(arr) {
    if(!arr || arr.length ==0) {
        return undefined;
    }
    const n = arr.length + 1;
    const expectedSum = n/2*(n + 1);
    const sum = arr.reduce((a,s) => a + s);

    return expectedSum -sum;
}

module.exports = findMissingNumber;
