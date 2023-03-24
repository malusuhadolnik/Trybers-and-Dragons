import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  public energyType: EnergyType;
  static mageCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
    Mage.mageCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.mageCount;
  }
}