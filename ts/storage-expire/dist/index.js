//expire 过期时间key permanent 永久不过期
class Storage {
    get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            const data = JSON.parse(value);
            const now = new Date().getTime();
            if (typeof data["__expire__" /* Dictionaries.expire */] == "number" &&
                data["__expire__" /* Dictionaries.expire */] < now) {
                this.remove(key);
                return {
                    message: `${key}值已过期`,
                    value: null
                };
            }
            else {
                return {
                    message: "获取成功",
                    value: data.value
                };
            }
        }
        else {
            return {
                message: "值无效",
                value: null
            };
        }
    }
    set(key, value, expire = "permanent" /* Dictionaries.permanent */) {
        const data = {
            value,
            ["__expire__" /* Dictionaries.expire */]: expire
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { Storage };
