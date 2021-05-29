import {Entity} from '../model/entity';
import {EntityBuilder} from '../interfaces/entity-builder';

export class EntityHeroBuilder extends EntityBuilder {

  constructor() {
    super(new Entity());
    this.reset();
  }
  
  public reset() {
    this._entity = new Entity();
    this._entity.level = 1;
    this._entity.health = 100;
    this._entity.attack = 30;
    this._entity.name = "Hero";
  } 

  public setName(value: string): void {
    this._entity.name = value;
  }
  public setHealth(value?: number): void {
    this._entity.health = value || 100;
  }
  public setAttack(value?: number): void {
    this._entity.attack = value || 30;
  }
  public setLevel(value? : number): void {
    this._entity.level = value || 0;
  }

  public build(): Hero {
    const hero = this.hero;
    this.reset();
    return hero;
  }
}
