var MyHashSet = function() {
    this.BASE = 769;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashSet.prototype.hash = function(key) {
    return key % this.BASE;
};

MyHashSet.prototype.add = function(key) {
    const h = this.hash(key); //得到键
    for (const element of this.data[h]) {
        //链表中查找值，存在就直接返回
        if (element === key) {
            return;
        }
    }
    //不存在直接加入队尾
    this.data[h].push(key);
};

MyHashSet.prototype.remove = function(key) {
    const h = this.hash(key); //找到对应的键
    const it = this.data[h]; //键对应的链表
    for (let i = 0; i < it.length; i++) {
        if (it[i] === key) {
            it.splice(i, 1); //删除
            return;
        }
    }
};

MyHashSet.prototype.contains = function(key) {
    const h = this.hash(key);
    for (const element of this.data[h]) {
        if (element === key) {
            return true;
        }
    }
    return false;
};