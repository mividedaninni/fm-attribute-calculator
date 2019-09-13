import {MediaHandlingEnum} from '../classes/media-handling.enum';
import {Attributes} from '../classes/attributes';
import {MinMax} from '../classes/min-max';

export class ParamCalculatorMedia {

  public static calculateBaseParamFromMediaHandling(param: MediaHandlingEnum) {
    const attributes = new Attributes();
    switch (param) {
      case MediaHandlingEnum.outspoken_unflappable: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(15, 20);
        attributes.pressure = new MinMax(15, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_shortTempered_confrontational: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(1, 7);
        break;
      }
      case MediaHandlingEnum.outspoken_shortTempered: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(8, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_volatile_confrontational: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(1, 7);
        break;
      }
      case MediaHandlingEnum.outspoken_volatile: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(8, 20);
        break;
      }
      case MediaHandlingEnum.outspoken_confrontational: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(7);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [
          Attributes.addThreeMedia(), Attributes.addFourMedia()
        ];
        break;
      }
      case MediaHandlingEnum.outspoken: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(7, 20);
        attributes.doubleCases = [
          Attributes.addThreeMedia(), Attributes.addFourMedia()
        ];
        break;
      }
      case MediaHandlingEnum.evasive_unflappable: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(15);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        break;
      }
      case MediaHandlingEnum.evasive_shortTempered_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_shortTempered: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(8, 20);
        break;
      }
      case MediaHandlingEnum.evasive_volatile_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_volatile: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(8, 20);
        break;
      }
      case MediaHandlingEnum.evasive_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(1, 7);
        break;
      }
      case MediaHandlingEnum.evasive_reserved: {
        attributes.controversy = new MinMax(1, 5);
        attributes.temperament = new MinMax(7, 14);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.doubleCases = [
          Attributes.addThreeMedia(), Attributes.addFourMedia()
        ];
        break;
      }
      case MediaHandlingEnum.evasive: {
        attributes.controversy = new MinMax(6, 14);
        attributes.temperament = new MinMax(7, 14);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.doubleCases = [
          Attributes.addThreeMedia(), Attributes.addFourMedia()
        ];
        break;
      }
      case MediaHandlingEnum.unflappable: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(15, 20);
        attributes.loyalty = new MinMax(11, 20);
        attributes.pressure = new MinMax(15, 20);
        // attributes.doubleCases = [];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 14);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.shortTempered_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.loyalty = new MinMax(11, 20);
        attributes.pressure = new MinMax(13, 20);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        break;
      }
      case MediaHandlingEnum.shortTempered: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.loyalty = new MinMax(11, 20);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        attributes.doubleCases.push(Attributes.addOneMedia());
        break;
      }
      case MediaHandlingEnum.volatile_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.loyalty = new MinMax(11, 20);
        attributes.professionalism = new MinMax(13, 20);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [Attributes.addOneMedia()];
        break;
      }
      case MediaHandlingEnum.volatile: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.loyalty = new MinMax(11, 20);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        attributes.doubleCases.push(Attributes.addOneMedia());
        break;
      }
      case MediaHandlingEnum.confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7);
        attributes.loyalty = new MinMax(11, 20);
        attributes.professionalism = new MinMax(13, 20);
        attributes.doubleCases = [Attributes.addOneMedia()];
        break;
      }
      case MediaHandlingEnum.reserved: {
        attributes.controversy = new MinMax(1, 5);
        attributes.temperament = new MinMax(7, 20);
        attributes.loyalty = new MinMax(11, 20);
        attributes.professionalism = new MinMax(13, 20);
        attributes.pressure = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addThreeMedia()
        ];
        break;
      }
      case MediaHandlingEnum.levelHeaded: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7, 20);
        attributes.loyalty = new MinMax(11, 20);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addThreeMedia(), Attributes.addFourMedia(), Attributes.addFiveMedia()
        ];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        break;
      }
      case MediaHandlingEnum.mediaFrendly_unflappable: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(15, 20);
        attributes.pressure = new MinMax(15, 20);
        attributes.doubleCases = [Attributes.addTwoMedia()];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addTwoMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addTwoMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addTwoMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addTwoMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [
          Attributes.addOneMedia(), Attributes.addTwoMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly_reserved: {
        attributes.controversy = new MinMax(1, 5);
        attributes.temperament = new MinMax(7, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.loyalty = new MinMax(1, 10);
        attributes.pressure = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addThreeMedia(), Attributes.addFourMedia()
        ];
        break;
      }
      case MediaHandlingEnum.mediaFrendly: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7, 20);
        attributes.doubleCases = [
          Attributes.addOneMedia(),
          Attributes.addTwoMedia(),
          Attributes.addThreeMedia(),
          Attributes.addFourMedia(),
          Attributes.addFiveMedia()
        ];
        break;
      }
      default: {
        break;
      }
    }
    return attributes;
  }

}
