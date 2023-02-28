interface TreeNode {
  value: string;
  title: string;
  children?: TreeNode[];
}

const treeData: TreeNode[] = [
  {
    value: "parent 1",
    title: "parent 1",
    children: [
      {
        value: "parent 1-0",
        title: "parent 1-0",
        children: [
          {
            value: "leaf1",
            title: "my leaf",
          },
          {
            value: "leaf2",
            title: "your leaf",
          },
        ],
      },
      {
        value: "parent 1-1",
        title: "parent 1-1",
        children: [
          {
            value: "sss",
            title: "your leaf1",
          },
        ],
      },
    ],
  },
];

function getAreaNameFromCode(areaCode: string, provinceArea: TreeNode[]) {
  let result;
  const helper = (provinceArea: TreeNode[]) => {
    provinceArea.map((item) => {
      if (item.value === areaCode) {
        result = item.title;
        return result;
      } else if (item.children) {
        helper(item.children);
      }
    });
  };
  helper(provinceArea);
  return result;
}

console.log(getAreaNameFromCode("leaf2", treeData));
