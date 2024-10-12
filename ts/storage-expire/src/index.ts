//expire 过期时间key permanent 永久不过期

import { Dictionaries } from "./enum";
import { Data, Expire, Key, Result, StorageCls } from "./type/index";

export class Storage implements StorageCls {
  get<T>(key: Key): Result<T> {
    const value = localStorage.getItem(key);
    if (value) {
      const data: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      if (
        typeof data[Dictionaries.expire] == "number" &&
        data[Dictionaries.expire] < now
      ) {
        this.remove(key);
        return {
          message: `${key}值已过期`,
          value: null
        };
      } else {
        return {
          message: "获取成功",
          value: data.value
        };
      }
    } else {
      return {
        message: "值无效",
        value: null
      };
    }
  }
  set<T>(key: Key, value: T, expire: Expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire
    };
    localStorage.setItem(key, JSON.stringify(data));
  }
  remove(key: Key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
