class person implements personInterFace {
  constructor(
    public _name: string,
    public _gender: string,
    public _age: number,
    public _personalColor: string,
    public _hairColor: string,
    public _topClothColor: string,
    public _bottomClothColor: string,
    public _shoesColor: string,
    public _scaleNumber: number,
    public _speed: number
  ) {
    this._name = _name;
    this._gender = _gender;
    this._age = _age;
    this._personalColor = _personalColor;
    this._hairColor = _hairColor;
    this._topClothColor = _topClothColor;
    this._bottomClothColor = _bottomClothColor;
    this._shoesColor = _shoesColor;
    this._scaleNumber = _scaleNumber;
    this._speed = _speed;
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
  setTopClothColor(topClothColor: string): void {
    this._topClothColor = topClothColor;
  }
  getTopClothColor(): string {
    return this._topClothColor;
  }
  setBottomClothColor(bottomClothColor: string): void {
    this._bottomClothColor = bottomClothColor;
  }
  getBottomClothColor(): string {
    return this._bottomClothColor;
  }
  setShoesColor(shoesColor: string): void {
    this._shoesColor = shoesColor;
  }
  getShoesColor(): string {
    return this._shoesColor;
  }
  setScaleNumber(scaleNumber: number): void {
    this._scaleNumber = scaleNumber;
  }
  getScaleNumber(): number {
    return this._scaleNumber;
  }
  setSpeed(speed: number): void {
    this._speed = speed;
  }
  getSpeed(): number {
    return this._speed;
  }
}

export default person;
