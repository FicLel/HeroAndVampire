import ObserverI from '../interfaces/observer-interface';

class Observer implements ObserverI {
  _listeners: any[];
  _value: any;

  constructor(value: any) {
    this._value = value;  
    this._listeners = [];
  }
  
  notify(): void {
    this._listeners.forEach(listener => listener(this._value));
  }

  subscribe(listener: any): void {
    this._listeners.push(listener);
  }

  get value() {
    return this._value;
  }

  set value(val: any) {
    if (val !== this._value) {
      this._value = val;
      this.notify();
    }
  }

}

export default Observer;
