function countVowels(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let vowelCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < str.length; i++) {
        if (vowels.find( char => char === str[i])) {
            vowelCount += 1;
        }
    }

    return vowelCount;
}

module.exports = countVowels;
