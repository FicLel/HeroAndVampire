import {Entity} from '../model/entity';
import {EntityBuilder} from '../interfaces/entity-builder';

export class EntityVampireBuilder extends EntityBuilder {

  constructor() {
    super(new Entity());
    this.reset();
  }

  public reset() {
    this._entity = new Entity();
    this._entity.level = 0;
    this._entity.health = 0;
    this._entity.attack = 0;
    this._entity.name = "unknown";
  }
  
  public setName(value: string): void {
    this._entity.name = value;
  }
  public setHealth(value: number): void {
    this._entity.health = value;
  }
  public setAttack(value: number): void {
    this._entity.attack = value;
  }
  public setLevel(value: number): void {
    this._entity.level = value;
  }
  public build(): Entity {
    const vampire = this._entity;
    this.reset();
    return vampire;
  }
}
