var peakIndexInMountainArray = function(arr) {
    const maxHeight = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxHeight) {
            console.log(i);
            return i;
        }
    }
};

let arr = [0, 2, 1, 0];
peakIndexInMountainArray(arr);