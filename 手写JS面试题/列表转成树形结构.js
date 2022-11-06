/**
 *[
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
    ...
]

转成
[
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
 */

function listToTree(data) {
    //data为列表
    let temp = {};
    let treeData = [];

    for (let i = 0; i < data.length; i++) {
        //创建 data的副本 temp
        temp[data[i].id] = data[i];
    }

    for (let i in temp) {
        if (+temp[i].parentId != 0) {
            //数组内此对象有父对象
            if (!temp[temp[i].parentId].children) {
                //父对象没有孩子
                temp[temp[i].parentId].children = []; //创建孩子
            }
            temp[temp[i].parentId].children.push(temp[i]); //父对象有子结点，则将当前结点加入孩子结点
        } else {
            treeData.push(temp[i]); //此对象没有父对象时，直接加入数组尾部
        }
    }
    return treeData;
}

const obj = [{
        id: 1,
        text: "节点1",
        parentId: 0, //这里用0表示为顶级节点
    },
    {
        id: 2,
        text: "节点1_1",
        parentId: 1, //通过这个字段来确定子父级
    },
];

const res = listToTree(obj);
// console.log(res);

const Print = (obj) => {
    if (obj.children) {
        Print(obj.children);
    }
    console.log(obj);
};

Print(res);