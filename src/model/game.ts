export class Game {
  _name: string;
  _date: string;
  _time: string;

  constructor() {
    this._time = '';
    this._name = '';
    this._date = '';
  }

  set name(value: string) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  set date(value: string) {
    this._date = value;
  }
  get date() {
    return this._date;
  }
  
  set time(value: string) {
    this._time = value;
  }
  get time() {
    return this._time;
  }
}
