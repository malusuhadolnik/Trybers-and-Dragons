import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Ranger extends Archetype {
  public energyType: EnergyType;
  static rangerCount = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Ranger.rangerCount += 1;
  }

  static createdArchetypeInstances(): number {
    return this.rangerCount;
  }
}