function findDisappearedNumbers(nums) {
    const len = nums.length;
    const markSet = new Set(nums);
    let res = [];
    for (let i = 1; i <= len; i++) {
        if (!markSet.has(i)) {
            res.push(i);
        }
    }
    return res;
}