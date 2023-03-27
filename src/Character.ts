import Fighter from './Fighter';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';
import Race, { Elf } from './Races'; // a importação de elf sem desestruturar acarreta em erro - caccont crate instance of abstract class

export default class Character implements Fighter {
  private _race: Race; 
  private _archetype: Archetype;
  private _maxLifePoints: number; 
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  _name: string;

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity); 
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, // ao usar "this._energy.type_", recebo erro: propriedade 'this' não existe no tipo energy
      amount: getRandomInt(1, 10),
    };
  }

  public get name():string {
    return this._name;
  }

  public get dexterity():number {
    return this._dexterity;
  }

  public get race():Race {
    return this._race;
  }

  public get archetype():Archetype {
    return this._archetype;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }

  public get lifePoints():number {
    return this._lifePoints;
  }

  public get strength():number {
    return this._strength;
  }

  public get defense():number {
    return this._defense;
  }

  public get energy(): Energy {
    return { ...this._energy }; // energy é um objeto! Para ler as propriedades, fazemos spread
  }

  public receiveDamage(attackPoints: number):number {
    const damage = attackPoints - this._defense;

    if (damage > 0) {
      this._lifePoints -= damage;
    }
    if (damage <= this._lifePoints) {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  public attack() {
    return this._strength;
  }

  public levelUp() {
    this._strength += getRandomInt(1, 10); // lint: Assignment (=) can be replaced with operator assignment (+=)           
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;

    const updateMaxLife = this._maxLifePoints + getRandomInt(1, 10);
    if (updateMaxLife > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    } else {
      this._maxLifePoints = updateMaxLife;  
    }

    this._lifePoints = this._maxLifePoints;
  }

  public special() {
    return (this._strength * 2);
  }
}