// Las clases son como moldes para que un objeto luzca de la misma manera

export class Person {
  //   public name: string;
  //   private address: string;

  //   constructor(name: string, address: string) {
  //     this.name = name;
  //     this.address = address;
  //   }

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

// Nueva clase que extiende de personas,
// Proriozar la composicion
// Confia en esto Ts, por eso transpila el codigo
export class Hero {
  //public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony", "Stark", "New York");
const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(ironman);
