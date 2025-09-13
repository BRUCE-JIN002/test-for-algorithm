class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    // 将访问的键移动到Map的末尾（表示最近使用）
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // 如果键已存在，先删除
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      // 如果缓存已满，删除最久未使用的键（Map开头的键）
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }

    // 将新键值对添加到Map末尾
    this.cache.set(key, value);
  }

  // 获取缓存当前状态（用于调试）
  getCacheState() {
    const entries = [];
    for (let [key, value] of this.cache) {
      entries.push({ key, value });
    }
    return entries;
  }

  // 获取缓存大小
  size() {
    return this.cache.size;
  }

  // 清空缓存
  clear() {
    this.cache.clear();
  }
}

// 使用示例
const lru = new LRUCache(3);

lru.put(1, "A");
lru.put(2, "B");
lru.put(3, "C");

console.log(lru.get(1)); // 返回 'A'
console.log(lru.get(2)); // 返回 'B'

lru.put(4, "D"); // 这会淘汰键3，因为它是最近最少使用的

console.log(lru.get(3)); // 返回 -1（未找到）
console.log(lru.get(4)); // 返回 'D'

// 获取当前缓存状态
console.log(lru.getCacheState());
