{
  let str = 'this is string';
  let num = 1;
  let bool = true;
}

{
  const str = 'this is string';
  const num = 1;
  const bool = true;
}

{
  function add1(a: number, b: number) {
    return a + b;
  }

  const x1 = add1(1, 1);

  function add2(a: number, b = 1) {
    return a + b;
  }

  const x2 = add2(1);
  // const x3 = add2(1, '1');
}

{
  type Adder = (a: number, b: number) => number

  const add: Adder = (a, b) => {
    return a + b;
  }

  const x1 = add(1, 1);
  // const x2 = add(1, '1');
}
