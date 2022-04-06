//  一个Map对象在迭代时会根据对象中元素的插入顺序来进行
// 新添加的元素会被插入到 map的末尾，整个栈倒序查看

class LRUcache {
    constructor(capacity) {
            this.secretKey = new Map();
            this.capacity = capacity;
        }
        //获取数据
    get(key) {
            if (this.secretKey.has(key)) {
                let tempValue = this.secretKey.get(key);
                this.secretKey.delete(key);
                this.secretKey.set(key, tempValue); //key的值修改为新值
                return tempValue;
            } else {
                return -1;
            }
        }
        //写入数据
    put(key, value) {
        if (this.secretKey.has(key)) {
            //key存在, 则先删除后插入，使得新值处于队尾
            this.secretKey.delete(key);
            this.secretKey.set(key, value);
        } else {
            //容量足够
            if (this.secretKey.size < this.capacity) {
                this.secretKey.set(key, value);
            } else {
                //容量不足
                // 删除 map的第一个元素，即为最长未使用的
                //keys() 返回一个引用的 Iterator 对象。它包含按照顺序插入 Map 对象中每个元素的key值
                this.secretKey.delete(this.secretKey.keys().next().value);
                //添加新key
                this.secretKey.set(key, value);
            }
        }
    }
}

let cache = new LRUcache(2); //初始化大小为 2的 cache
cache.put(1, 1);
cache.put(2, 2);
console.log("cache.get(1)", cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log("cache.get(2)", cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log("cache.get(1)", cache.get(1)); // 返回 -1 (未找到)
console.log("cache.get(3)", cache.get(3)); // 返回  3
console.log("cache.get(4)", cache.get(4)); // 返回  4