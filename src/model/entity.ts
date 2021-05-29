export class Entity {
  _name: string;
  _health: number;
  _attack: number;
  _level: number;
  
  constructor() {
    this._name = 'unkown';
    this._health = 0;
    this._attack = 0;
    this._level = 0;
  }
  
  get name(): string {
    return this._name;
  }
  
  set name(value: string) {
    this._name = value;
  }

  get health(): number {
    return this._health;
  }

  set health(value: number) {
    this._health = value;
  }

  get attack() {
    return this._attack;
  }

  set attack(value: number) {
    this._attack = value;
  }

  get level() {
    return this._level;
  }
  
  set level(value: number) {
    this._level = value;
  }

  public toString(): string {
    return `Hero: ${this._name}`;
  }

}
