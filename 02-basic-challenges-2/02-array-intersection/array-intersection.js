function arrayIntersection(arr1, arr2) {
    const intersaction = [];
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);

    arr1.forEach(element => {
        if(arr2.has(element)) {
            intersaction.push(element);
        }
    });

    return intersaction;
}

module.exports = arrayIntersection;
