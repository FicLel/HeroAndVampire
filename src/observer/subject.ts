import Observer from './observer';

class Subject extends Observer {
  constructor(value: any, deps: any[]) {
    super(value());
    const listener = () => {
      this._value = value();
      this.notify();
    }
    deps.forEach(dep => dep.subscribe(listener));
  }

  get value() {
    return this._value;
  }

  set value(_: any) {
    throw "Cannot set computed property";
  }
}

export default Subject;
