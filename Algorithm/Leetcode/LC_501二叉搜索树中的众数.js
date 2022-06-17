var findMode = function(root) {
    let base = 0,
        count = 0,
        maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x == base) {
            count++;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    };

    const dfs = (root) => {
        if (!root) {
            return;
        }
        dfs(root.left);
        update(root.val);
        dfs(root.right);
    };

    dfs(root);

    return answer;
};