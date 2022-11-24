// function f1(): void {}
// f1().doSomething();

// type Adder = (a: number, b: number) => number;
// const add: Adder = (a, b) => a + b;

// interface Entity {
//   add: (a: number, b: number) => number;
//   del(a: number, b: number): number;
// }

// const entity: Entity = {
//   add: (a, b) => a + b,
//   del(a, b) {
//     return a - b;
//   }
// }

// function log(x: number | string = 'hello') {
//   console.log(x);
// }

// log(1);
// log('1');

// function sum(...nums: (number | string)[]) {
//   return nums.reduce((a, b) => Number(a) + Number(b), 0);
// }

// console.log(sum(1, 2));
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, '3'));

// class Component {
//   onClick(this: Component) {}
// }

// const component = new Component();

// interface UI {
//   addClickListener(onClick: (this: void) => void): void;
// }

// const ui: UI = {
//   addClickListener() {}
// }

// ui.addClickListener(component.onClick);

// class Container {
//   private val: number

//   constructor(val: number) {
//     this.val = val;
//   }

//   map(cb: (x: number) => number): this {
//     this.val = cb(this.val);
//     return this;
//   }

//   log(): this {
//     console.log(this.val);
//     return this;
//   }
// }

// const instance = new Container(1)
//   .map((x) => x + 1)
//   .log()
//   .map((x) => x * 3)
//   .log();

// function convert(x: string): number
// function convert(x: string | number | null): any {
//   if (typeof x === 'string') {
//     return '2';
//   }
//   if (typeof x === 'number') {
//     return String(x);
//   }
//   return -1;
// }

// function isString(s): s is string {
//   return typeof s === 'string';
// }

// function isNumber(n: number) {
//   return typeof n === 'number';
// }

// function operator(x: unknown) {
//   if (isString(x)) {}
//   if (isNumber(x)) {}
// }
