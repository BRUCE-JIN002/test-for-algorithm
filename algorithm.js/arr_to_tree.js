let arr = [{
        id: 1,
        name: '项目1',
        pid: 0
    }, {
        id: 2,
        name: '项目2',
        pid: 1
    }, {
        id: 3,
        name: '项目3',
        pid: 1
    }, {
        id: 4,
        name: '项目4',
        pid: 3
    }, {
        id: 5,
        name: '项目5',
        pid: 3
    }, ]
    // 输出
let tree = [{
    "id": 1,
    "name": "项目1",
    "pid": 0,
    "children": [{
        "id": 2,
        "name": "项目2",
        "pid": 1,
        "children": []
    }, {
        "id": 3,
        "name": "项目3",
        "pid": 1,
        "children": [{
            "id": 4,
            "name": "项目4",
            "pid": 3,
            "children": []
        }, {
            "id": 5,
            "name": "项目5",
            "pid": 3,
            "children": []
        }, ]
    }]
}]

const testFunction = (arr0) => {
    var tree0 = []
    for (e in arr0) {
        if (typeof arr0[e] == 'object') {
            // console.log(arr0[e])
            arr0[e].children = []
            tree0.push(arr0[e])
        }
    }
    console.log(tree0)
}
testFunction(arr)