function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const length = str.length -1;
    const count = str.length /2;
    let isPalindrome = true;
    for(let i=0; i < count; i++) {
        if(str[i] !== str[length - i]) {
            isPalindrome = false;
        }
    }

    return isPalindrome;
}

module.exports = isPalindrome;
