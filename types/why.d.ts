
// 声明一个模块

// .d.ts里面不会写实现, 只写声明
declare module "lodash" {
  export function join(...args: any[]): any
}

// 为自己的变量/变量定义类型声明
declare const whyName: string
declare const whyAge: number
declare const whyHeight: number

declare function foo(bar: string): string

declare class Person {
  // 可以知道创建出来的对象有下面的属性
  // name: string
  // age: number

  // 或者使用public语法糖
  constructor(public name: string, public age: number)
}

// 作为一个第三方库为其他开发中提供类型声明文件 .d.ts =>axios.d.ts

// 声明文件模块
// 后缀名: *所有以.png结尾的图片
// 这个模块就是一个文件, 当作一个文件使用即可, 里面没有其他的方法函数之类的, 所以单独作声明即可, 没有必要在后面加上{}
// declare了才能在index.ts里面当作模块进行import
declare module "*.png"
declare module "*.jpg"
declare module "*.jpeg"
declare module "*.svg"

declare module "*.vue"

// 声明成模块(不合适)
// 声明命名空间
declare namespace $ {
  export function ajax(settings: any): any
}

