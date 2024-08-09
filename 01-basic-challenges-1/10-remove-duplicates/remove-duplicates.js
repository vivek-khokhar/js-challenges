function removeDuplicates(arr) {
    // const mapper = {};
    // arr.forEach(element => {
    //     mapper[element] = true;
    // });
    // const keys = Object.keys(mapper).map(ele => Number.isInteger(ele) ? +ele: ele);
    // return keys;

    return Array.from(new Set(arr))
}

module.exports = removeDuplicates;
