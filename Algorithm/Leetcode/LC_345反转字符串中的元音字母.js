var reverseVowels = function(s) {
    const n = s.length;
    const arr = Array.from(s);
    let i = 0,
        j = n - 1;
    while (i < j) {
        //找到靠前的元音字母
        while (i < n && !isVowel(arr[i])) {
            i++;
        }
        //找到靠后的元音字母
        while (j > 0 && !isVowel(s[j])) {
            j--;
        }
        //两元音字母交换
        if (i < j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return arr.join("");
};

//判断是不是元音字母
const isVowel = (ch) => {
    return "aoeiuAOEIU".indexOf(ch) >= 0;
};

//交换函数
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};