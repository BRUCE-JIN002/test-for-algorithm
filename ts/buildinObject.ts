//内置类型
let num: Number = 10;
let str: String = "hello";
let bol: Boolean = true;
let date: Date = new Date();
let arr: Array<number> = [1, 2, 3];
let obj: Object = { name: "Tom", age: 18 };
let fun: Function = function () {};
let reg: RegExp = new RegExp(/abc/);

//DOM类型
let div: HTMLDivElement | null = document.querySelector("div");
let divs: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

//BOM类型
let win: Window = window;
let doc: Document = document;
let loc: Location = location;
let nav: Navigator = navigator;
let hist: History = history;
let screens: Screen = screen;
let docEl: HTMLElement = document.documentElement;
let promise: Promise<number> = Promise.resolve(1);
