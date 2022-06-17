var reverseLeftWords = function(s, n) {
    return s.slice(n) + s.slice(0, n);
};

console.log(reverseLeftWords("abcdefg", 2));