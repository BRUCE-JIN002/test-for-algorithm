var Solution = function(nums) {
    this.nums = nums;
    //得到原始数组的副本
    this.original = nums.slice();
};

//重置时直接复制原始数组，并返回副本
Solution.prototype.reset = function() {
    this.nums = this.original.slice();
    return this.nums;
};

Solution.prototype.shuffle = function() {
    const shuffled = new Array(this.nums.length).fill(0);
    const list = [];
    this.nums.forEach((num) => list.push(num));

    for (let i = 0; i < this.nums.length; i++) {
        //随机获得数组的一个元素
        const j = Math.random() * list.length; //此时的 list是长度不断变小的
        shuffled[i] = list.splice(j, 1); //删除此元素并返回后赋值给shuffled[i]
    }
    this.nums = shuffled.slice();
    return this.nums;
};