/**
 * const obj = {
 a: {
        b: 1,
        c: 2,
        d: {e: 5}
    },
 b: [1, 3, {a: 2, b: 3}],
 c: 3
}

flatten(obj) 结果返回如下
// {
//  'a.b': 1,
//  'a.c': 2,
//  'a.d.e': 5,
//  'b[0]': 1,
//  'b[1]': 3,
//  'b[2].a': 2,
//  'b[2].b': 3
//   c: 3
// }
 */

const isObject = (val) => {
    return typeof val === "object" && val !== null;
};

function flatten(obj) {
    if (!isObject(obj)) {
        return;
    }
    let res = [];
    const dfs = (cur, prefix) => {
        if (isObject(cur)) {
            //是对象，且对象不空
            if (Array.isArray(cur)) {
                //是数组
                cur.forEach((item, index) => {
                    dfs(item, `${prefix}[${index}]`);
                });
            } else {
                //不是数组
                for (let k in cur) {
                    dfs(cur[k], `${prefix}${prefix ? "." : ""}${k}`);
                }
            }
        } else {
            //不是对象
            res[prefix] = cur;
        }
    };
    dfs(obj, "");
    return res;
}

const obj = {
    a: {
        b: 1,
        c: 2,
        d: { e: 5 },
    },
    b: [1, 3, { a: 2, b: 3 }],
    c: 3,
};

const result = flatten(obj);
console.log(result);

/** 输出结果：
 * [
  'a.b': 1,    'a.c': 2,
  'a.d.e': 5,  'b[0]': 1,
  'b[1]': 3,   'b[2].a': 2,
  'b[2].b': 3, c: 3
]
 */