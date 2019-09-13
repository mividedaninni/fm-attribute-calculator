import {PersonalityEnum} from '../classes/personality.enum';
import {Attributes} from '../classes/attributes';
import {MinMax} from '../classes/min-max';

export class ParamCalculatorPersonality {

  public static calculateParamFromDetermination(determination: number, cases: number[]) {
    const attributes = new Attributes();
    if (cases.indexOf(1) !== -1 && determination <= 5) {
      attributes.ambition = new MinMax(10, 20);
    }
    if (cases.indexOf(2) !== -1 && determination <= 9) {
      attributes.professionalism = new MinMax(5, 20);
    }
    if (cases.indexOf(3) !== -1 && determination <= 9) {
      attributes.pressure = new MinMax(4, 20);
    }
    if (cases.indexOf(4) !== -1 && determination <= 9) {
      attributes.sportsmanship = new MinMax(1, 17);
    }
    if (cases.indexOf(5) !== -1 && determination >= 11 && determination <= 20) {
      attributes.sportsmanship = new MinMax(5, 20);
    }
    if (cases.indexOf(6) !== -1 && determination >= 15 && determination <= 20) {
      attributes.pressure = new MinMax(15, 16);
    }
    if (cases.indexOf(7) !== -1 && determination >= 18 && determination <= 20) {
      attributes.ambition = new MinMax(1, 9);
    }
    if (Object.keys(attributes).length > 0) {
      return attributes;
    } else {
      return null;
    }
  }

  public static calculateBaseParamFromPersonality(determination: number, param: PersonalityEnum) {
    const attributes = new Attributes();
    switch (param) {
      case PersonalityEnum.model_citizen : {
        attributes.professionalism = new MinMax(18, 20);
        attributes.determination = new MinMax(18, 20);
        attributes.pressure = new MinMax(18, 20);
        attributes.ambition = new MinMax(18, 20);
        attributes.loyalty = new MinMax(18, 20);
        attributes.sportsmanship = new MinMax(18, 20);
        attributes.temperament = new MinMax(18, 20);
        break;
      }
      case PersonalityEnum.model_professional : {
        attributes.professionalism = new MinMax(20);
        attributes.temperament = new MinMax(10, 20);
        break;
      }
      case PersonalityEnum.professional : {
        attributes.professionalism = new MinMax(18, 19);
        attributes.temperament = new MinMax(10, 20);
        break;
      }
      case PersonalityEnum.perfectionist : {
        attributes.professionalism = new MinMax(18, 20);
        attributes.determination = new MinMax(18, 20);
        attributes.ambition = new MinMax(18, 20);
        attributes.temperament = new MinMax(1, 9);
        break;
      }
      case PersonalityEnum.temperamental : {
        attributes.professionalism = new MinMax(1, 10);
        attributes.temperament = new MinMax(1, 4);
        break;
      }
      case PersonalityEnum.driven : {
        attributes.determination = new MinMax(20);
        attributes.ambition = new MinMax(10, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addSixPers()
        ];
        break;
      }
      case PersonalityEnum.determined : {
        attributes.determination = new MinMax(18, 19);
        attributes.ambition = new MinMax(10, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addSixPers()
        ];
        break;
      }
      case PersonalityEnum.slack : {
        attributes.professionalism = new MinMax(1);
        attributes.determination = new MinMax(1, 9);
        attributes.temperament = new MinMax(5, 20);
        break;
      }
      case PersonalityEnum.casual : {
        attributes.professionalism = new MinMax(2, 4);
        attributes.determination = new MinMax(1, 9);
        attributes.temperament = new MinMax(5, 20);
        break;
      }
      case PersonalityEnum.very_ambitious : {
        attributes.ambition = new MinMax(20);
        attributes.loyalty = new MinMax(1, 9);
        attributes.determination = new MinMax(1, 17);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.amibitous : {
        attributes.ambition = new MinMax(16, 19);
        attributes.loyalty = new MinMax(1, 9);
        attributes.determination = new MinMax(1, 17);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.unambitious : {
        attributes.ambition = new MinMax(1, 5);
        attributes.loyalty = new MinMax(11, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.honest : {
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
        ];
        break;
      }
      case PersonalityEnum.sporting : {
        attributes.sportsmanship = new MinMax(18, 19);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
        ];
        break;
      }
      case PersonalityEnum.easily_discouraged : {
        attributes.determination = new MinMax(1);
        attributes.ambition = new MinMax(1, 9);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addThreePers()
        ];
        break;
      }
      case PersonalityEnum.low_determination : {
        attributes.determination = new MinMax(2, 5);
        attributes.ambition = new MinMax(1, 9);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addThreePers()
        ];
        break;
      }
      case PersonalityEnum.unsporting : {
        attributes.sportsmanship = new MinMax(1);
        attributes.determination = new MinMax(11, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.realist : {
        attributes.sportsmanship = new MinMax(2, 4);
        attributes.determination = new MinMax(11, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.very_loyal : {
        attributes.loyalty = new MinMax(20);
        attributes.ambition = new MinMax(6, 7);
        attributes.determination = new MinMax(6, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2, 5]);
        }
        break;
      }
      case PersonalityEnum.loyal : {
        attributes.loyalty = new MinMax(18, 19);
        attributes.ambition = new MinMax(6, 7);
        attributes.determination = new MinMax(6, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addOnePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2, 5]);
        }
        break;
      }
      case PersonalityEnum.iron_willed : {
        attributes.pressure = new MinMax(20);
        attributes.determination = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(),
          Attributes.addOnePers(),
          Attributes.addTwoPers(),
          Attributes.addThreePers(),
          Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.resilient : {
        attributes.pressure = new MinMax(17, 19);
        attributes.determination = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(),
          Attributes.addOnePers(),
          Attributes.addTwoPers(),
          Attributes.addThreePers(),
          Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.spineless : {
        attributes.pressure = new MinMax(1);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(),
          Attributes.addOnePers(),
          Attributes.addTwoPers(),
          Attributes.addThreePers(),
          Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [1])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1]);
        }
        break;
      }
      case PersonalityEnum.low_self_belief : {
        attributes.pressure = new MinMax(2, 3);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(),
          Attributes.addOnePers(),
          Attributes.addTwoPers(),
          Attributes.addThreePers(),
          Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [1])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1]);
        }
        break;
      }
      case PersonalityEnum.light_hearted : {
        attributes.pressure = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(15, 20);
        attributes.temperament = new MinMax(10, 20);
        attributes.professionalism = new MinMax(1, 17);
        attributes.doubleCases = [
          Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 2, 4, 6, 7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 2, 4, 6, 7]);
        }
        break;
      }
      case PersonalityEnum.spirited : {
        attributes.pressure = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(1, 14);
        attributes.temperament = new MinMax(10, 20);
        attributes.professionalism = new MinMax(11, 17);
        attributes.doubleCases = [
          Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 4, 5, 6, 7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 4, 5, 6, 7]);
        }
        break;
      }
      case PersonalityEnum.jovial : {
        attributes.pressure = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(1, 14);
        attributes.temperament = new MinMax(10, 20);
        attributes.professionalism = new MinMax(1, 10);
        attributes.doubleCases = [
          Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 2, 4, 5, 6, 7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 2, 4, 5, 6, 7]);
        }
        break;
      }
      case PersonalityEnum.resolute : {
        attributes.professionalism = new MinMax(15, 20);
        attributes.determination = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.pressure = new MinMax(1, 16);
        attributes.doubleCases = [
          Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.fairly_professional : {
        attributes.professionalism = new MinMax(15, 20);
        attributes.determination = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 3, 4, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 3, 4, 5]);
        }
        break;
      }
      case PersonalityEnum.fairly_determined : {
        attributes.determination = new MinMax(15, 20);
        attributes.professionalism = new MinMax(1, 14);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.pressure = new MinMax(1, 16);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(),
          Attributes.addTwoPers(),
          Attributes.addThreePers(),
          Attributes.addFourPers(),
          Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.fairly_amibitous : {
        attributes.ambition = new MinMax(15, 20);
        attributes.professionalism = new MinMax(1, 14);
        attributes.determination = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addTwoPers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [2, 3, 4, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2, 3, 4, 5]);
        }
        break;
      }
      case PersonalityEnum.fairly_loyal : {
        attributes.loyalty = new MinMax(15, 20);
        attributes.professionalism = new MinMax(1, 14);
        attributes.determination = new MinMax(1, 14);
        attributes.ambition = new MinMax(6, 14);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addFourPers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 2, 3, 4, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 2, 3, 4, 5]);
        }
        break;
      }
      case PersonalityEnum.fairly_sporting : {
        attributes.sportsmanship = new MinMax(15, 20);
        attributes.professionalism = new MinMax(1, 14);
        attributes.determination = new MinMax(1, 14);
        attributes.ambition = new MinMax(1, 14);
        attributes.loyalty = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 2, 3, 4])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 2, 3, 4]);
        }
        break;
      }
      case PersonalityEnum.balanced : {
        attributes.professionalism = new MinMax(1, 14);
        attributes.determination = new MinMax(1, 14);
        attributes.ambition = new MinMax(1, 14);
        attributes.loyalty = new MinMax(1, 14);
        attributes.sportsmanship = new MinMax(1, 14);
        attributes.doubleCases = [
          Attributes.addAsteriskPers(), Attributes.addThreePers(), Attributes.addFivePers()
        ];
        if (this.calculateParamFromDetermination(determination, [1, 2, 3, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [1, 2, 3, 5]);
        }
        break;
      }
      default:
        break;
    }
    return attributes;
  }

}
