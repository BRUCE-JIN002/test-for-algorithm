declare enum Color {
  Red,
  Yellow,
  Blue
  //   Green
}

declare let color: Color;

switch (color) {
  case Color.Red:
    // do something
    break;

  case Color.Yellow:
    // do something
    break;

  case Color.Blue:
    // do something
    break;
  default:
    // 不能将类型“Color”分配给类型“never”。
    let exhaustiveCheck: never = color;
    break;
}
