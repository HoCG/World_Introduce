interface personInterFace {
  _id: number;
  _name: string;
  _gender: string;
  _age: number;
  _personalColor: string;
  _hairColor: string;
  setId(id: number): void;
  getId(): number;
  setName(name: string): void;
  getName(): string;
  setGender(gender: string): void;
  getGender(): string;
  setAge(age: number): void;
  getAge(): number;
  setPersonalColor(personalColor: string): void;
  getPersonalColor(): string;
  setHairColor(hairColor: string): void;
  getHairColor(): string;
}
