import Race from './Race';

export default class Orc extends Race {
  public maxLifePoints: number;
  static orcCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 74;
    Orc.orcCount += 1;
  }

  static createdRacesInstances(): number {
    return this.orcCount;
  }
}