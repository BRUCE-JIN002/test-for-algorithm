var exist = function (board, word) {
  //终止条件
  if (board.length === 0) {
    return false;
  }
  if (word.length === 0) {
    return true;
  }
  //开始查找
  let row = board.length;
  let col = board[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      //每一个都可以作为起点搜索
      const ret = find(i, j, 0); //0为当前查询的字母索引
      if (ret) {
        return true;
      }
    }
  }

  return false;

  //递归函数
  function find(i, j, cur) {
    if (i >= row || i < 0 || j >= col || j < 0) {
      return false;
    }

    let letter = board[i][j];

    //不相同时直接返回false
    if (letter !== word[cur]) {
      return false;
    }

    if (cur === word.length - 1) {
      return true;
    }

    board[i][j] = null; //选择当前字母, 并标记为null

    //下一步
    const ret =
      find(i + 1, j, cur + 1) ||
      find(i - 1, j, cur + 1) ||
      find(i, j + 1, cur + 1) ||
      find(i, j - 1, cur + 1);
    //回撤
    board[i][j] = letter;
    return ret;
  }
};
