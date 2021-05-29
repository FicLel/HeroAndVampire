import Subject from './observer/subject';
import Observer from './observer/observer';
import './style.css'

const tempValue: number = 3.06;
const bindings: any = {};

const applyBindings: any = (): any => {
	document.querySelectorAll("[data-bind]").forEach((elem: any) => {
  	const obs: any = bindings[elem.getAttribute("data-bind")];
    bindValue(elem, obs);
  });
}

const bindValue: any = (input: any, observable: Observer) => {
  console.log('binding ',input);
  input.value = observable.value;
  observable.subscribe(() => input.value = observable.value);
  input.onkeyup = () => observable.value = input.value;
};

const app = () => {
  bindings.first = new Observer("Jeremy");
  bindings.full = new Subject(() => `${bindings.first.value}`.trim(), [bindings.first]);
  applyBindings();
};

setTimeout(app, 0);
