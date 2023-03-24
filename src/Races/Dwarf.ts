import Race from './Race';

export default class Dwarf extends Race {
  public maxLifePoints: number;
  static dwarfCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.dwarfCount += 1;
  }

  static createdRacesInstances(): number {
    return this.dwarfCount;
  }
}