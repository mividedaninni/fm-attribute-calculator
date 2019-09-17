import {MediaHandlingEnum} from '../classes/media-handling.enum';
import {Attributes} from '../classes/attributes';

export class ParamCalculatorMedia {

  public static calculateBaseParamFromMediaHandling(param: MediaHandlingEnum) {
    const attributes = new Attributes();
    switch (param) {
      case MediaHandlingEnum.outspoken_unflappable: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 15, 20)
          .set('pressure', 15, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_shortTempered_confrontational: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 1, 2)
          .set('sportsmanship', 1, 7);
        break;
      }
      case MediaHandlingEnum.outspoken_shortTempered: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 1, 2)
          .set('sportsmanship', 8, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_volatile_confrontational: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 3, 6)
          .set('sportsmanship', 1, 7);
        break;
      }
      case MediaHandlingEnum.outspoken_volatile: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 3, 6)
          .set('sportsmanship', 8, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_confrontational: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 7)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([
            Attributes.addThreeMedia(), Attributes.addFourMedia()
          ]);
        break;
      }
      case MediaHandlingEnum.outspoken: {
        attributes
          .set('controversy', 15, 20)
          .set('temperament', 7, 20)
          .setDoubleCases([
            Attributes.addThreeMedia(), Attributes.addFourMedia()
          ]);
        break;
      }
      case MediaHandlingEnum.evasive_unflappable: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 15)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20);
        break;
      }
      case MediaHandlingEnum.evasive_shortTempered_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .set('sportsmanship', 1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_shortTempered: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .set('sportsmanship', 8, 20);
        break;
      }
      case MediaHandlingEnum.evasive_volatile_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .set('sportsmanship', 1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_volatile: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .set('sportsmanship', 8, 20);
        break;
      }
      case MediaHandlingEnum.evasive_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 7)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .set('sportsmanship', 1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_reserved: {
        attributes
          .set('controversy', 1, 5)
          .set('temperament', 7, 14)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .setDoubleCases([
            Attributes.addThreeMedia(), Attributes.addFourMedia()
          ]);
        break;
      }
      case MediaHandlingEnum.evasive: {
        attributes
          .set('controversy', 6, 14)
          .set('temperament', 7, 14)
          .set('pressure', 15, 20)
          .set('professionalism', 15, 20)
          .setDoubleCases([
            Attributes.addThreeMedia(), Attributes.addFourMedia()
          ]);
        break;
      }
      case MediaHandlingEnum.unflappable: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 15, 20)
          .set('loyalty', 11, 20)
          .set('pressure', 15, 20);
        // attributes.doubleCases = [];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 14);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.shortTempered_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('loyalty', 11, 20)
          .set('pressure', 13, 20)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([Attributes.addOneMedia()]);
        break;
      }
      case MediaHandlingEnum.shortTempered: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('loyalty', 11, 20)
          .set('sportsmanship', 8, 20)
          .setDoubleCases([Attributes.addOneMedia()]);
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.volatile_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('loyalty', 11, 20)
          .set('professionalism', 13, 20)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([Attributes.addOneMedia()]);
        break;
      }
      case MediaHandlingEnum.volatile: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('loyalty', 11, 20)
          .set('sportsmanship', 8, 20)
          .setDoubleCases([Attributes.addOneMedia()]);
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 7)
          .set('loyalty', 11, 20)
          .set('professionalism', 13, 20)
          .setDoubleCases([Attributes.addOneMedia()]);
        break;
      }
      case MediaHandlingEnum.reserved: {
        attributes
          .set('controversy', 1, 5)
          .set('temperament', 7, 20)
          .set('loyalty', 11, 20)
          .set('professionalism', 13, 20)
          .set('pressure', 1, 14)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addThreeMedia()]);
        break;
      }
      case MediaHandlingEnum.levelHeaded: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 7, 20)
          .set('loyalty', 11, 20)
          .setDoubleCases([
            Attributes.addOneMedia(), Attributes.addThreeMedia(), Attributes.addFourMedia(), Attributes.addFiveMedia()
          ]);
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_unflappable: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 15, 20)
          .set('loyalty', 15, 20)
          .setDoubleCases([Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 1, 2)
          .set('sportsmanship', 8, 20)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 3, 6)
          .set('sportsmanship', 8, 20)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_confrontational: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 7)
          .set('sportsmanship', 1, 7)
          .setDoubleCases([Attributes.addOneMedia(), Attributes.addTwoMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_reserved: {
        attributes
          .set('controversy', 1, 5)
          .set('temperament', 7, 20)
          .set('professionalism', 15, 20)
          .set('loyalty', 1, 10)
          .set('pressure', 1, 14)
          .setDoubleCases([Attributes.addThreeMedia(), Attributes.addFourMedia()]);
        break;
      }
      case MediaHandlingEnum.mediaFrendly: {
        attributes
          .set('controversy', 1, 14)
          .set('temperament', 7, 20)
          .setDoubleCases([
          Attributes.addOneMedia(),
          Attributes.addTwoMedia(),
          Attributes.addThreeMedia(),
          Attributes.addFourMedia(),
          Attributes.addFiveMedia()
        ]);
        break;
      }
      default: {
        break;
      }
    }
    return attributes;
  }

}
