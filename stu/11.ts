// 类型守卫
{
  const convertToUpperCase = (strOrArray: string | string[]) => {
    if (typeof strOrArray === 'string') {
      return strOrArray.toUpperCase();
    } else if (Array.isArray(strOrArray)) {
      return strOrArray.map(item => item.toUpperCase);
    }
  }
}

// 如何区分联合类型？
// 1.switch
{
  const convert = (c: 'a' | 1) => {
    switch (c) {
      case 1:
        return c.toFixed();
      case 'a':
        return c.toLowerCase();
    }
  }

  const feat = (c: { animal: 'panda'; name: 'China' } | { feat: 'video'; name: 'Japan' }) => {
    switch (c.name) {
      case 'China':
        return c.animal;
      case 'Japan':
        return c.feat;
    }
  }
}
// 2. 字面量恒等
{
  const convert = (c: 'a' | 1) => {
    if (c === 1) return c.toFixed();
    else if (c === 'a') return c.toLowerCase();
  }
}

// 3. typeof
{
  const convert = (c: 'a' | 1) => {
    if (typeof c === 'number') return c.toFixed();
    else if (typeof c === 'string') return c.toLowerCase();
  }
}

// 4. instanceof
{
  class Dog {
    wang = 'wangwangwnag';
  }
  
  class Cat {
    miao = 'miaomiao';
  }

  function getName (animal: Dog | Cat) {
    if (animal instanceof Dog) return animal.wang;
    else if (animal instanceof Cat) return animal.miao;
  }
}

// 5. in
{
  interface Dog {
    wang: string;
  }
  
  interface Cat {
    miao: string;
  }

  function getName(animal: Dog | Cat) {
    if ('wang' in animal) return animal.wang;
    else if ('miao' in animal) return animal.miao;
  }
}
// 6. 自定义类型守卫
{
  interface Dog {
    wang: string;
  }
  
  interface Cat {
    miao: string;
  }

  function isDog(animal: Dog | Cat): animal is Dog {
    return 'wang' in animal;
  }

  function getName(animal: Dog | Cat) {
    if (isDog(animal)) return animal.wang;
  }
}

// 如何区别枚举类型？
{
  enum A {
    one,
    two
  }

  function cpWithSelf(param: A) {
    if (param === A.two) return param;
  }
}