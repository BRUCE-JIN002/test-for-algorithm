var getAllElements = function(root1, root2) {
    let ans1 = [];
    let ans2 = [];
    dfs(root1, ans1);
    dfs(root2, ans2);
    // ans.sort((a, b) => a - b);
    let res = mergerSort(ans1, ans2);
    console.log(res);
    return res;
};

const dfs = (node, ans) => {
    if (!node) {
        return;
    }
    dfs(node.left, ans);
    ans.push(node.val);
    dfs(node.right, ans);
};

const mergerSort = (nums1, nums2) => {
    let ans = [];
    let p1 = 0,
        p2 = 0;
    while (true) {
        if (p1 == nums1.length) {
            for (let i = p2; i < nums2.length; i++) {
                ans.push(nums2[i]);
            }
            break;
        }
        if (p2 == nums2.length) {
            for (let i = p1; i < nums1.length; i++) {
                ans.push(nums1[i]);
            }
            break;
        }
        if (nums1[p1] < nums2[p2]) {
            ans.push(nums1[p1++]);
        } else {
            ans.push(nums2[p2++]);
        }
    }
    return ans;
};

/** */
var getAllElements2 = function(root1, root2) {
    let ans = [];
    dfs(root1, ans);
    dfs(root2, ans);
    ans.sort((a, b) => a - b);
    return ans;
};