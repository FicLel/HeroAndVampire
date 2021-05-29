import {Entity} from '../model/entity';

export abstract class EntityBuilder {
  
	protected _entity: Entity;

  constructor(entity: Entity) {
    this._entity = entity;
  }  

	public abstract setName(value: string): void;
  public abstract setHealth(value?: number): void;
  public abstract setAttack(value?: number): void;
  public abstract setLevel(value: number): void;

	public abstract build(): Entity;
}
