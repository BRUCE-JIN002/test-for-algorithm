var intersection = function(nums1, nums2) {
    let set = new Set(nums1);
    let res = [];
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            res.push(nums2[i]);
            set.delete(nums2[i]);
        }
    }
    return res;
};