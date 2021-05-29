interface ObserverI {
  _listeners: any[];
  _value: any;
  notify(): void;
  subscribe(listener: any): void;
}

export default ObserverI;
