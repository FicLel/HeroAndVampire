export class Battle {
  _hero: any;
  _vampire: any;

  setNameBattle():any  {
    let tempEnemy = document.getElementById('vname');
    tempEnemy.innerHTML = this._vampire.name;
    let tempHero = document.getElementById('hname');
    tempHero.innerHTML = this._hero.name;
    this.changeHealth(true);
  }
  
  attack(): any {
    console.log('attack');
    const probability: number = Math.random() * (100 - 0) + 0;
    if (probability >= 30) {
      this._vampire.health -= this._hero.attack;
      this.writeLog('ATAQUE DEL HEROE ACERTADO');
      this.changeHealth(false);
    } else {
      this.writeLog('EL HEROE ha fallado');
    }
    this.vampireAttack();
    return this.verifyBattle();
  }

  vampireAttack(): any {
    const probability: number = Math.random() * (100 - 0) + 0;
    if (probability >= 60) {
      this._hero.health -= this._vampire.attack;
      this.writeLog('ATAQUE DEL vampiro ACERTADO');
      this.changeHealth(false);
    } else {
      this.writeLog('EL vampiro ha fallado');
    }
  }

  verifyBattle(): any {
    if (this._vampire.health <= 0 || this._hero.health <= 0) {
      return false;
    } else return true;
  };


  changeHealth(first: boolean): any {
    if (first) {
      document.getElementById('hhealth').setAttribute('max', this._hero.health); 
      document.getElementById('vhealth').setAttribute('max', this._vampire.health);
    }

    document.getElementById('vhealth').setAttribute('value', this._vampire.health);
    document.getElementById('hhealth').setAttribute('value', this._hero.health);

  }
  
  writeLog(log: string): any {
    console.log(log);
    document.getElementsByClassName("historical")[0].innerHTML += `${log}</br>`;
  }
  

  set hero(value: any) {
    this._hero = value;
  }

  get hero() {
    return this._hero;
  }

  set vampire(value: any) {
    this._vampire = value;
  }

  get vampire() {
    return this._vampire;
  }
}
