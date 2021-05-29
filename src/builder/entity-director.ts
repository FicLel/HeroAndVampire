import {EntityBuilder} from '../interfaces/entity-builder';

export class EntityDirector {

  public createHero (hero: EntityBuilder, name: string) {
    hero.setName(name)
    return hero.build();
  }

  public createBasicVampire(vampire: EntityBuilder) {
    vampire.setName('Ruddy');
    vampire.setLevel(1);
    vampire.setAttack(50);
    vampire.setLevel(100);
    return vampire.build();
  }

}
