class person implements personInterFace {
  constructor(
    public _id: number,
    public _name: string,
    public _gender: string,
    public _age: number,
    public _personalColor: string,
    public _hairColor: string
  ) {
    this._id = _id;
    this._name = _name;
    this._gender = _gender;
    this._age = _age;
    this._personalColor = _personalColor;
    this._hairColor = _hairColor;
  }
  setId(id: number): void {
    this._id = id;
  }
  getId(): number {
    return this._id;
  }
  setName(name: string): void {
    this._name = name;
  }
  getName(): string {
    return this._name;
  }
  setGender(gender: string): void {
    this._gender = gender;
  }
  getGender(): string {
    return this._gender;
  }
  setAge(age: number): void {
    this._age = age;
  }
  getAge(): number {
    return this._age;
  }
  setPersonalColor(personalColor: string): void {
    this._personalColor = personalColor;
  }
  getPersonalColor(): string {
    return this._personalColor;
  }
  setHairColor(hairColor: string): void {
    this._hairColor = hairColor;
  }
  getHairColor(): string {
    return this._hairColor;
  }
}

export default person;
