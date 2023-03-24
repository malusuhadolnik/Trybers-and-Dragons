import Race from './Race';

export default class Halfling extends Race {
  public maxLifePoints: number;
  static hflCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.hflCount += 1;
  }

  static createdRacesInstances(): number {
    return this.hflCount;
  }
}