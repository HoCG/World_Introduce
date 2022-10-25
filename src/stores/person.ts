class person implements personInterFace {
  constructor(
    private _id: number,
    private _name: string,
    private _gender: string,
    private _age: number,
    private _personalColor: string,
    private _hairColor: string,
    private _topClothColor: string,
    private _bottomClothColor: string,
    private _scaleNumber: number,
    private _speed: number
  ) {
    this._id = _id;
    this._name = _name;
    this._gender = _gender;
    this._age = _age;
    this._personalColor = _personalColor;
    this._hairColor = _hairColor;
    this._topClothColor = _topClothColor;
    this._bottomClothColor = _bottomClothColor;
    this._scaleNumber = _scaleNumber;
    this._speed = _speed;
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
