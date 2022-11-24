// 继承
/**
class Animal {
  weight: number

  type = 'Animal'

  constructor(weight: number) {
    this.weight = weight;
  }

  say(name: string) {
    console.log(`I'm ${name}!`);
  }
}

class Dog extends Animal {
  constructor() {
    super(2);
  }
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.say('Q');
console.log(dog.type);
console.log(dog.weight);
*/

// 公共、私有与受保护的修饰符 只读修饰符
/**
class Son {
  readonly def: string
  public firstName: string;
  private lastName: string = 'Stark';
  protected pName: string = 'pN';

  constructor(firstName: string) {
    this.firstName = firstName;
    this.def = '!';
  }
}

const son = new Son('Tony');
console.log(son.firstName);
son.firstName = 'Jack';
console.log(son.firstName);
// console.log(son.lastName);
console.log(son.def);
// son.def = 'a'

class GrandSon extends Son {
  constructor(firstName: string) {
    super(firstName);
  }

  public getMyLastName() {
    return this.pName;
  }
}

const grandSon = new GrandSon('Tony');
console.log(grandSon.getMyLastName());
// grandSon.laasName
*/

