// 联合类型
/* function formatPX(size: number | string) {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  if (typeof size === 'string') {
    return `${parseInt(size) || 0}px`;
  }
}

formatPX(12);
formatPX('12');
formatPX(true);
formatPX(null); */

/* function test(a: string | 'a') {
  console.log(a);
}

test('b');
test('a'); */

/* interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

const getPet: () => Bird | Fish = () => {
  return {} as Bird | Fish;
};

const Pet = getPet();
Pet.layEggs();
if ('fly' in Pet) Pet.fly(); */

// 合并接口类型
/* type IntersectionType = { id: number; name: string; }
  & { age: number, name: '1' };
const mixed: IntersectionType = {
  id: 1,
  name: '1',
  age: 18
} */

// 类型缩减
/* type BorderColor = 'black' | 'red' | 'green' | 'yellow' | 'blue' | string & {};
let color: BorderColor = 'blue'

type UnionInterce = { age: number } | { age: never; [key: string]: string}
let test: UnionInterce = { age: 1, tt: '1'} */