var binaryTreePaths = function (root) {
  const paths = [];
  const dfs = (root, path) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += "->";
        dfs(root.left, path);
        dfs(root.right, path);
      }
    }
  };
  dfs(root, "");
  return paths;
};
