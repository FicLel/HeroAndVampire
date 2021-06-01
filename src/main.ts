import Subject from './observer/subject';
import Observer from './observer/observer';
import {EntityDirector} from './builder/entity-director';
import {EntityVampireBuilder} from './builder/vampire-entity-builder';
import {EntityHeroBuilder} from './builder/hero-entity-builder';
import {GameController} from './controller/game-controller';
import {Game} from './model/game';
import {Battle} from './utils/battle-utilities';
import './style.css'

import './style.css'

//We import db module

const bindings: any = {};

const director = new EntityDirector();
const vampire = new EntityVampireBuilder();
const hero = new EntityHeroBuilder();

let battle = new Battle();

let toggle = document.getElementById("init");
let toggle2 = document.getElementById('batle');


let name = '';
//Init game logic 
//Here we implement our builders
const initGame: any = (): any => {
  const realVampire = director.createBasicVampire(vampire);
  const realHero = director.createHero(hero, bindings?.first?.value);

  toggle.style.display = 'none';
  toggle2.style.display = 'block';
  battle.hero = realHero;
  battle.vampire = realVampire;
  battle.setNameBattle();
};

const attack = (): any => {
  let active = battle.attack();
  if (!active) {
    toggle.style.display = 'block';
    toggle2.style.display = 'none';
  }
};

const addRowsToTable: any = (name: string, date: string, time: string): any => {
  let body: any = document.getElementById("list")?.getElementsByTagName("tbody")[0];
  let newRow: any = body.insertRow();
  let nameRow: any = newRow.insertCell().appendChild(document.createTextNode(name));
  let dateRow: any = newRow.insertCell().appendChild(document.createTextNode(date));
  let timeRow: any = newRow.insertCell().appendChild(document.createTextNode(time));

};

//Getting data from our MVC this is the View layer
const controller: any = new GameController();

const result: any = await controller.index();

result.forEach((game: any) => {
  addRowsToTable(game.name, game.date, game.time);
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
  toggle2.style.display = 'none';
  bindings.first = new Observer('');
  bindings.full = new Subject(() => `Bienvenido ${bindings.first.value}`.trim(), [bindings.first]);
  applyBindings();
};

//We start our app with our observers
setTimeout(app, 0);

//Event listeners for buttons

document.getElementById('start').addEventListener('click', (): any => {initGame()}, false);
document.getElementById('attack').addEventListener('click', (): any => {attack()}, false);
