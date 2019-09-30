import {MinMax} from './min-max';
import {AttributesType} from './attribute-types';
import {AttributeValueTypes} from './attribute-value-types';

export class Attributes {
  private ambition: MinMax;
  private controversy: MinMax;
  private determination: MinMax;
  private loyalty: MinMax;
  private pressure: MinMax;
  private professionalism: MinMax;
  private sportsmanship: MinMax;
  private temperament: MinMax;
  // each array's elem is a couple of attribute;
  // if there's one that not overlap, the other MUST be true
  // if are overlapped, no info gained
  private doubleCases: Attributes[];
  // param to eventually mix calculating from determination value
  private fromDetermination: Attributes;

  constructor() {
  }

  public static addAsteriskPers() {
    return new Attributes()
      .set('temperament', 5, 20)
      .set('professionalism', 11, 20);
  }

  public static addOnePers() {
    return new Attributes()
      .set('professionalism', 1, 17)
      .set('temperament', 1, 19);
  }

  public static addTwoPers() {
    return new Attributes()
      .set('ambition', 1, 15)
      .set('loyalty', 10, 20);
  }

  public static addThreePers() {
    return new Attributes()
      .set('ambition', 16, 20)
      .set('loyalty', 1, 10);
  }

  public static addFourPers() {
    return new Attributes()
      .set('ambition', 1, 17)
      .set('loyalty', 8, 20);
  }

  public static addFivePers() {
    return new Attributes()
      .set('temperament', 1, 9)
      .set('pressure', 1, 14);
  }

  public static addSixPers() {
    return new Attributes()
      .set('professionalism', 1, 17)
      .set('ambition', 10, 17);
  }

  public static addOneMedia() {
    return new Attributes()
      .set('pressure', 1, 14)
      .set('professionalism', 1, 14);
  }

  public static addTwoMedia() {
    return new Attributes()
      .set('loyalty', 1, 10)
      .set('sportsmanship', 1, 11)
      .set('professionalism', 1, 12);
  }

  public static addThreeMedia() {
    return new Attributes()
      .set('temperament', 8, 20)
      .set('sportsmanship', 8, 20);
  }

  public static addFourMedia() {
    return new Attributes()
      .set('temperament', 1, 14)
      .set('pressure', 1, 14);
  }

  public static addFiveMedia() {
    return new Attributes()
      .set('controversy', 6, 14)
      .set('professionalism', 1, 14);
  }

  public getFromDetermination(): Attributes {
    return this.fromDetermination;
  }

  public setFromDetermination(attributes: Attributes) {
    if (attributes) {
      this.fromDetermination = attributes;
    }
    return this;
  }

  public getDoubleCases(): Attributes[] {
    return this.doubleCases;
  }

  public setDoubleCases(doubled: Attributes[]) {
    this.doubleCases = [...doubled];
    return this;
  }

  public set(elem: AttributesType, min: AttributeValueTypes, max?: AttributeValueTypes) {
    switch (elem) {
      case 'ambition':
        this.ambition = new MinMax(min, max);
        break;
      case 'controversy':
        this.controversy = new MinMax(min, max);
        break;
      case 'determination':
        this.determination = new MinMax(min, max);
        break;
      case 'loyalty':
        this.loyalty = new MinMax(min, max);
        break;
      case 'pressure':
        this.pressure = new MinMax(min, max);
        break;
      case 'professionalism':
        this.professionalism = new MinMax(min, max);
        break;
      case 'sportsmanship':
        this.sportsmanship = new MinMax(min, max);
        break;
      case 'temperament':
        this.temperament = new MinMax(min, max);
        break;
    }
    return this;
  }
}
