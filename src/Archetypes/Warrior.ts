import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  public energyType: EnergyType;
  static warriorCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.warriorCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.warriorCount;
  }
}