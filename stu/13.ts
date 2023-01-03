// declare 变量
declare let val: number
val = 2

// 声明函数
declare function toString(x: number): string;
const x = toString(1);

// 声明类
declare class Person {
  public name: string;
  private age: number;
  constructor(name: string);
  getAge(): number;
}

const person = new Person('Mike');
person.name
person.getAge();

import { first } from 'lodash';
first(['a']);

declare namespace $ {
  const version: number;
  function ajax(setting?: any): void;
}

$.version;
$.ajax();