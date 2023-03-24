import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  public energyType: EnergyType;
  static necroCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Necromancer.necroCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.necroCount;
  }
}