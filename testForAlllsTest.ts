// 定义输入对象的类型
type InputObject = Record<string, any>;

// 定义输出对象的类型（包含 count 属性）
type OutputObject<T extends InputObject> = T & { count: number };

//数组属性相同值数量统计（可用于计算表格合并值rowSpan）
const calcRowSpan = <T extends InputObject>(
  objArr: T[],
  field: keyof T
): OutputObject<T>[] => {
  //按指定属性排序
  const sortedArr = objArr.sort((a, b) => a[field] - b[field]);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    let step = 1;
    while (
      sortedArr[i + step] !== undefined &&
      sortedArr[i + step][field] !== undefined &&
      sortedArr[i][field] === sortedArr[i + step][field]
    ) {
      step++;
    }
    for (let j = i; j < i + step; j++) {
      (sortedArr[j] as OutputObject<T>).count =
        j === i ? (step === 1 ? 0 : step) : 0;
    }
    i += step - 1;
  }

  return sortedArr as OutputObject<T>[];
};
