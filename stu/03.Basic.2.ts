let result: unknown
if (typeof result === 'number') {
  result.toFixed();
}

const userInfo: {
  id?: number;
  name?: null | string
  age?: never
} = {};
let undeclared: undefined = undefined
let unusable: void = undefined
unusable = undeclared
// undeclared = unusable
if (userInfo.id !== undefined) {
  userInfo.id.toFixed()
}
if (userInfo.name !== undefined && userInfo.name !== null) {
  userInfo.name.toLocaleLowerCase();
}

const str: string = 'string';

// if (typeof str === 'number') {
//   str.toLowerCase(); // Property 'toLowerCase' does not exist on type 'never'.ts(2339)
// }
const arrayNumber: number[] = [1, 2, 3, 4];
const greaterThan2: number = arrayNumber.find(num => num > 2) as number; // 提示 ts(2322)

let mayNullOrUndefinedOrString: null | undefined | string;
console.log(mayNullOrUndefinedOrString!.toString());