// 泛型类型参数
/* function reflect<P>(params: P) {
  return params;
}

const reflectStr = reflect('string');
const reflectNum = reflect(1);

function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
  return [p1, p2];
} */

// 泛型类

// 泛型类型
/* type StringOrNumberArray<E> = E extends string | number ? E[] : E;
type BooleanOrString = string | boolean;
type WhatIsThis = StringOrNumberArray<BooleanOrString>;
type BooleanOrStringGot = BooleanOrString extends string | number ? BooleanOrString[] : BooleanOrString;

interface ReduxModel<State> {
  state: State,
  reducers: {
    [action: string]: (state: State, action: any) => State
  }
}

type ModelInterface = { id: number; name: string };
const model: ReduxModel<ModelInterface> = {
  state: { id: 1, name: 'ls' },
  reducers: {
    setId: (state, action: { payload: number }) => ({
      ...state,
      id: action.payload
    }),
    setName: (state, action: { payload: string }) => ({
      ...state,
      name: action.payload,
    }),
  }
} */

// 泛型约束 extends

/* interface ObjSetter {
  <O extends {}, K extends keyof O, V extends O[K]>(obj: O, key: K, value: V): V; 
}
const setValueOfObj: ObjSetter = (obj, key, value) => (obj[key] = value);
setValueOfObj({ id: 1, name: 'name' }, 'id', 2); // ok
setValueOfObj({ id: 1, name: 'name' }, 'name', 'new name'); // ok
// setValueOfObj({ id: 1, name: 'name' }, 'age', 2); // ts(2345)
// setValueOfObj({ id: 1, name: 'name' }, 'id', '2'); // ts(2345) */

