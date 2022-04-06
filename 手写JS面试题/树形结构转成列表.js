/**
 *[
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id:2,
                text: '节点1_1',
                parentId:1
            }
        ]
    }
]
**  转成 :  
[
    {
        id: 1,
        text: '节点1',
        parentId: 0 //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: '节点1_1',
        parentId: 1 //通过这个字段来确定子父级
    }
]
 */

function treeToList(data) {
    let res = [];
    //深度优先遍历 tree
    const dfs = (tree) => {
        tree.forEach((item) => {
            if (item.children) {
                dfs(item.children);
                delete item.children; //比那里过就删除，不然影响后序遍历
            }
            res.push(item);
        });
    };
    dfs(data);
    return res;
}

const data = [{
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [{
        id: 2,
        text: "节点1.1",
        parentId: 1,
    }, ],
}, ];

const result = treeToList(data);
console.log(result);