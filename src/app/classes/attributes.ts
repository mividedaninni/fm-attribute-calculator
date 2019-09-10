import {MinMax} from './min-max';

export class Attributes {
  ambition: MinMax;
  controversy: MinMax;
  determination: MinMax;
  loyalty: MinMax;
  pressure: MinMax;
  professionalism: MinMax;
  sportsmanship: MinMax;
  temperament: MinMax;
  // each array's elem is a couple of attribute;
  // if there's one that not overlap, the other MUST be true
  // if are overlapped, no info gained
  doubleCases: Attributes[];
  // param to eventually mix calculating from determination value
  fromDetermination: Attributes;

  constructor() {
  }

  static addAsteriskPersonality() {
    const attrAst = new Attributes();
    attrAst.temperament = new MinMax(5, 20);
    attrAst.professionalism = new MinMax(11, 20);
    return attrAst;
  }

  static addOnePersonality() {
    const attrAst = new Attributes();
    attrAst.professionalism = new MinMax(1, 17);
    attrAst.temperament = new MinMax(1, 19);
    return attrAst;
  }

  static addTwoPersonality() {
    const attrAst = new Attributes();
    attrAst.ambition = new MinMax(1, 15);
    attrAst.loyalty = new MinMax(10, 20);
    return attrAst;
  }

  static addThreePersonality() {
    const attrAst = new Attributes();
    attrAst.ambition = new MinMax(6, 20);
    attrAst.loyalty = new MinMax(1, 10);
    return attrAst;
  }

  static addFourPersonality() {
    const attrAst = new Attributes();
    attrAst.loyalty = new MinMax(1, 17);
    attrAst.ambition = new MinMax(8, 20);
    return attrAst;
  }

  static addFivePersonality() {
    const attrAst = new Attributes();
    attrAst.temperament = new MinMax(1, 9);
    attrAst.pressure = new MinMax(1, 14);
    return attrAst;
  }

  static addSixPersonality() {
    const attrAst = new Attributes();
    attrAst.professionalism = new MinMax(1, 17);
    attrAst.ambition = new MinMax(10, 17);
    return attrAst;
  }

  static addOneMedia() {
    const attrAst = new Attributes();
    attrAst.pressure = new MinMax(1, 14);
    attrAst.professionalism = new MinMax(1, 14);
    return attrAst;
  }

  static addTwoMedia() {
    const attrAst = new Attributes();
    attrAst.loyalty = new MinMax(1, 10);
    // this last two are both
    attrAst.sportsmanship = new MinMax(1, 11);
    attrAst.professionalism = new MinMax(1, 12);
    return attrAst;
  }

  static addThreeMedia() {
    const attrAst = new Attributes();
    attrAst.temperament = new MinMax(8, 20);
    attrAst.sportsmanship = new MinMax(8, 20);
    return attrAst;
  }

  static addFourMedia() {
    const attrAst = new Attributes();
    attrAst.temperament = new MinMax(1, 14);
    attrAst.pressure = new MinMax(1, 14);
    return attrAst;
  }

  static addFiveMedia() {
    const attrAst = new Attributes();
    attrAst.controversy = new MinMax(6, 14);
    attrAst.professionalism = new MinMax(1, 14);
    return attrAst;
  }
}
