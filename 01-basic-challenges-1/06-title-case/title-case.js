function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    words = words.map(element => {
        return element[0].toUpperCase() + element.slice(1);
    });
    return words.join(" ");
}

module.exports = titleCase;
