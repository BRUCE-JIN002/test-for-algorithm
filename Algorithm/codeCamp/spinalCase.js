function spinalCase(str) {
  // 将字符串中的每个单词都替换为大写字母和小写字母
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // 将字符串转换为小写
  str = str.toLowerCase().replace(/[\s_]/g, "-");
  // 返回替换后的字符串
  return str;
}

const res = spinalCase("The_Andy_Griffith_Show");

console.log(res);
