interface Props {
  name: string;
  age: number;
  info: {}; //对象类型
}

interface Detail {
  boss: Props;
  num: string | number;
}

const detail: Detail = {
  boss: {
    name: "LiLong",
    age: 28,
    info: {
      sex: "male",
      address: "nanjinglu"
    }
  },
  num: "1"
};

console.log(detail.boss.name);
console.log(detail.boss.info);

var string = "2022-07-24";
var today = new Date(string.replace(/-/g, "/"));
console.log(today);
//Sun Jul 24 2022 00:00:00 GMT+0800 (中国标准时间)
