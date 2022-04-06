var dailyTemperatures = function(temperatures) {
    const ans = [];
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i + 1; j <= temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                ans[i] = j - i;
                break;
            } else {
                ans[i] = 0;
            }
        }
    }
    return ans;
};