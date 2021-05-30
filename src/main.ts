import Subject from './observer/subject';
import Observer from './observer/observer';
import {EntityDirector} from './builder/entity-director';
import {EntityVampireBuilder} from './builder/vampire-entity-builder';
import {EntityHeroBuilder} from './builder/hero-entity-builder';
import {GameController} from './controller/game-controller';
import './style.css'
import {Game} from './model/game';

//We import db module

const bindings: any = {};

const director = new EntityDirector();
const vampire = new EntityVampireBuilder();
const hero = new EntityHeroBuilder();


let name = '';
//Init game logic 
const initGame: any = (): any => {
  const realVampire = director.createBasicVampire(vampire);
  const realHero = director.createHero(hero, bindings?.first?.value);
  console.log('hero', realHero.toString());
  console.log('vampire', realVampire.toString());
};

const controller: any = new GameController();

const result: any = await controller.index();

result.forEach((game: any) => {
  console.log(game.name);
});

/*
  To apply our observer we have to get all elements with the attribute data-bind
  after that we get our bidings variable
  then we notify in bidn value
  
*/
const applyBindings: any = (): any => {
	document.querySelectorAll("[data-bind]").forEach((elem: any) => {
  	const obs: any = bindings[elem.getAttribute("data-bind")];
    bindValue(elem, obs);
  });
}

/*
  we pass our elemten of the dom as an observer
  then we set the variable and subscribe to changes on the elemtn
  if a keyup happens we notify the subscriber
*/

const bindValue: any = (input: any, observable: Observer) => {
  console.log('binding ',input);
  input.value = observable.value;
  observable.subscribe(() => input.value = observable.value);
  input.onkeyup = () => observable.value = input.value;
};

//We declare our app with an observer an say with attribute we will find after data-bind
const app = () => {
  bindings.first = new Observer('');
  bindings.full = new Subject(() => `Bienvenido ${bindings.first.value}`.trim(), [bindings.first]);
  applyBindings();
};

//We start our app with our observers
setTimeout(app, 0);

//Event listeners for buttons

document.getElementById('start').addEventListener('click', (): any => {initGame()}, false);
