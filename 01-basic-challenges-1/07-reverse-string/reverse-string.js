function reverseString(str) {
    let reversed = ""

    for (let index = str.length -1; index >= 0; index--) {
        reversed += str[index];   
    }

    return reversed;
}

module.exports = reverseString;
