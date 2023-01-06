// TS2456: Type alias 'T' circularly references itself.
// type T = Readonly<T>

/* type OWN = string | number | boolean | null | OWN[] | { [key: string]: OWN }
const json1: OWN = 'own'
const json2: OWN = ['str', 1, true, null];
const json3: OWN = { key: 'value' }; */

// function toString1(x: number | undefined) {
//   if (x === undefined) {
//     return '';
//   }
//   return x.toString();
// }

// toString1();  // TS2554: Expected 1 arguments, but got 0.
// toString1(undefined);
// toString1(1);

/* new Promise<void>((resolve) => {
  resolve();
}); */

/* type Obj = {
  [key in 'id' | 'name']: any
}

const obj: Obj = { id: 1, name: 'aa'} */