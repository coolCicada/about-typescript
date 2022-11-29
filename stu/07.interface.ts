// interface 接口类型
/* function Study(language: { name: string; age: () => number}) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years age.`);
}

Study({
  name: '1',
  age: () => new Date().getFullYear() - 2012
})

interface ProgramLanguage {
  name: string;
  age: () => number;
}

function NewStudy(language: ProgramLanguage) {
  console.log(`ProgramLanguage ${language.name} created ${language.age()} years age.`);
}
 */

// 缺省类型 缺省类型 等同于 (() => number) | undefined 但是 缺省类型可以没有这个key
/* interface Test {
  name: string;
  age?: () => number;
}

interface Test2 {
  name: string;
  age: (() => number) | undefined;
}

let a: Test = {
  name: 'ls'
}

let a2: Test2 = {
  name: 'ls',
  age: undefined
} */

// 定义函数类型
/* interface ProgramLanguage {
  name: string;
  age: () => number
}
interface StudyLanguage {
  (language: ProgramLanguage): void
}

type StudyLanguageType = (language: ProgramLanguage) => void

let StudyInterface: StudyLanguage = language => console.log(`${language.name} ${language.age()}`) */

// 索引签名
/* interface LanguageRankInterface {
  [rank: number]: string
}

{
  let LanguageRankMap: LanguageRankInterface = {
    1: 'ts',
    2: 'js',
    // 'www': '1'
  }
}

interface Test {
  [ns: string]: number | string
  // [anyt: string]: string
}

let test: Test = {
  age: 1,
  anyProperty: 'str'
} */

// Type 类型别名
/* interface ProgramLanguage {
  age: number
}
{
  type LanguageType = {
    name: string;
    age: () => number
  }

  type MixedType = string | number;
  type IntersectionType = { id: number; name: string; } & { age: number; name: string };
  type AgeType = ProgramLanguage['age'];
} */

// interface 和 Type 的区别
/* {
  interface Language {
    id: number;
  }
  interface Language {
    name: string
  }
  let lang: Language = {
    id: 1,
    name: 'name'
  }
}

{
  type Language = { id: number }
  // type Language = { name: string}
} */