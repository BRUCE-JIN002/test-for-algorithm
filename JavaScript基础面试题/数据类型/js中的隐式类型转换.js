/**
 * JavaScript 中的隐式类型转换主要发生在+、-、*、/以及==、>、<这些运算符之间。
 * 而这些运算符只能操作基本类型值，
 * 所以在进行这些运算前的第一步就是将两边的值用ToPrimitive转换成基本类型，再进行操作。
  以下是基本类型的值在不同操作符的情况下隐式转换的规则 
  （对于对象，其会被ToPrimitive转换成基本类型，所以最终还是要应用基本类型转换规则）
*/

//1. + 操作符
//+操作符的两边有至少一个string类型变量时，两边的变量都会被隐式转换为字符串；
//其他情况下两边的变量都会被转换为数字

console.log(1 + "23"); //'123'
console.log("23" + 1); //'231'
console.log(1 + Symbol); //1function Symbol() { [native code] }
console.log(1 + false); //1
console.log(false + true); //1

//2. -、*、/ 操作符
//NaN也是一个数字
console.log(1 * "23"); //23
console.log(1 * false); //0
console.log(1 / "aa"); //NaN

//3. 对于==操作符
//操作符两边的值都尽量转成number

console.log(3 == true); //false
console.log(!3 == false); //true
console.log("0" == false); //true
console.log("0" == 0); //true

//4. 对于> 和 < 比较符
//如果两边都是字符串，则比较字母表顺序

console.log("ca" < "bd"); //false
console.log("a" < "b"); //true

//其他情况先转换为数字在比较
console.log("12" > "14"); //false
console.log(false > -1); //true

//以上说的是基本类型的隐式转换，而对象会被ToPrimitive转换为基本类型再进行转换：
var a = {};
console.log(a > 2); //false

//其对比过程如下:

/**
 * a.valueOf() // {}, 上面提到过，ToPrimitive默认type为number，所以先valueOf，结果还是个对象，下一步
 * a.toString() // "[object Object]"，现在是一个字符串了
 * Number(a.toString()) // NaN，根据上面 < 和 > 操作符的规则，要转换成数字
 * NaN > 2 //false，得出比较结果
 */
console.log(NaN > 2);
console.log(NaN < 2);
console.log(NaN !== 2);
