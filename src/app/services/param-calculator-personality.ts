import {PersonalityEnum} from '../classes/personality.enum';
import {Attributes} from '../classes/attributes';
import {CasesFromDetermination} from '../classes/cases-from-determination';

export class ParamCalculatorPersonality {

  public static calculateParamFromDetermination(determination: number, cases: CasesFromDetermination[]): Attributes {
    const attributes = new Attributes();
    if (cases.indexOf('CASE_ONE') !== -1 && determination <= 5) {
      attributes.set('ambition', 10, 20);
    }
    if (cases.indexOf('CASE_TWO') !== -1 && determination <= 9) {
      attributes.set('professionalism', 5, 20);
    }
    if (cases.indexOf('CASE_THREE') !== -1 && determination <= 9) {
      attributes.set('pressure', 4, 20);
    }
    if (cases.indexOf('CASE_FOUR') !== -1 && determination <= 9) {
      attributes.set('sportsmanship', 1, 17);
    }
    if (cases.indexOf('CASE_FIVE') !== -1 && determination >= 11 && determination <= 20) {
      attributes.set('sportsmanship', 5, 20);
    }
    if (cases.indexOf('CASE_SIX') !== -1 && determination >= 15 && determination <= 20) {
      attributes.set('pressure', 15, 16);
    }
    if (cases.indexOf('CASE_SEVEN') !== -1 && determination >= 18 && determination <= 20) {
      attributes.set('ambition', 1, 9);
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
        attributes
          .set('professionalism', 18, 20)
          .set('determination', 18, 20)
          .set('pressure', 18, 20)
          .set('ambition', 18, 20)
          .set('loyalty', 18, 20)
          .set('sportsmanship', 18, 20)
          .set('temperament', 18, 20);
        break;
      }
      case PersonalityEnum.model_professional : {
        attributes
          .set('professionalism', 20)
          .set('temperament', 10, 20);
        break;
      }
      case PersonalityEnum.professional : {
        attributes
          .set('professionalism', 18, 19)
          .set('temperament', 10, 20);
        break;
      }
      case PersonalityEnum.perfectionist : {
        attributes
          .set('professionalism', 18, 20)
          .set('determination', 18, 20)
          .set('ambition', 18, 20)
          .set('temperament', 1, 9);
        break;
      }
      case PersonalityEnum.temperamental : {
        attributes
          .set('professionalism', 1, 10)
          .set('temperament', 1, 4);
        break;
      }
      case PersonalityEnum.driven : {
        attributes
          .set('determination', 20)
          .set('ambition', 10, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addSixPers()
          ]);
        break;
      }
      case PersonalityEnum.determined : {
        attributes
          .set('determination', 18, 19)
          .set('ambition', 10, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addSixPers()
          ]);
        break;
      }
      case PersonalityEnum.slack : {
        attributes
          .set('professionalism', 1)
          .set('determination', 1, 9)
          .set('temperament', 5, 20);
        break;
      }
      case PersonalityEnum.casual : {
        attributes
          .set('professionalism', 2, 4)
          .set('determination', 1, 9)
          .set('temperament', 5, 20);
        break;
      }
      case PersonalityEnum.very_ambitious : {
        attributes
          .set('ambition', 20)
          .set('loyalty', 1, 9)
          .set('determination', 1, 17)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_TWO']));
        break;
      }
      case PersonalityEnum.amibitous : {
        attributes
          .set('ambition', 16, 19)
          .set('loyalty', 1, 9)
          .set('determination', 1, 17)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_TWO']));
        break;
      }
      case PersonalityEnum.unambitious : {
        attributes
          .set('ambition', 1, 5)
          .set('loyalty', 11, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_TWO']));
        break;
      }
      case PersonalityEnum.honest : {
        attributes
          .set('sportsmanship', 5, 20)
          .set('determination', 1, 9)
          .set('professionalism', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
          ]);
        break;
      }
      case PersonalityEnum.sporting : {
        attributes
          .set('sportsmanship', 18, 19)
          .set('determination', 1, 9)
          .set('professionalism', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
          ]);
        break;
      }
      case PersonalityEnum.easily_discouraged : {
        attributes
          .set('determination', 1)
          .set('ambition', 1, 9)
          .set('sportsmanship', 1, 17)
          .set('professionalism', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addThreePers()
          ]);
        break;
      }
      case PersonalityEnum.low_determination : {
        attributes
          .set('determination', 2, 5)
          .set('ambition', 1, 9)
          .set('sportsmanship', 1, 17)
          .set('professionalism', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addThreePers()
          ]);
        break;
      }
      case PersonalityEnum.unsporting : {
        attributes
          .set('sportsmanship', 1)
          .set('determination', 11, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.realist : {
        attributes
          .set('sportsmanship', 2, 4)
          .set('determination', 11, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.very_loyal : {
        attributes
          .set('loyalty', 20)
          .set('ambition', 6, 7)
          .set('determination', 6, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_TWO', 'CASE_FIVE']));
        break;
      }
      case PersonalityEnum.loyal : {
        attributes
          .set('loyalty', 18, 19)
          .set('ambition', 6, 7)
          .set('determination', 6, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addOnePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_TWO', 'CASE_FIVE']));
        break;
      }
      case PersonalityEnum.iron_willed : {
        attributes
          .set('pressure', 20)
          .set('determination', 15, 20)
          .set('sportsmanship', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(),
            Attributes.addOnePers(),
            Attributes.addTwoPers(),
            Attributes.addThreePers(),
            Attributes.addFourPers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.resilient : {
        attributes
          .set('pressure', 17, 19)
          .set('determination', 15, 20)
          .set('sportsmanship', 5, 20)
          .setDoubleCases([
            Attributes.addAsteriskPers(),
            Attributes.addOnePers(),
            Attributes.addTwoPers(),
            Attributes.addThreePers(),
            Attributes.addFourPers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.spineless : {
        attributes
          .set('pressure', 1)
          .set('determination', 1, 9)
          .set('professionalism', 5, 20)
          .set('sportsmanship', 1, 17)
          .setDoubleCases([
            Attributes.addAsteriskPers(),
            Attributes.addOnePers(),
            Attributes.addTwoPers(),
            Attributes.addThreePers(),
            Attributes.addFourPers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_ONE']));
        break;
      }
      case PersonalityEnum.low_self_belief : {
        attributes
          .set('pressure', 2, 3)
          .set('determination', 1, 9)
          .set('professionalism', 5, 20)
          .set('sportsmanship', 1, 17)
          .setDoubleCases([
            Attributes.addAsteriskPers(),
            Attributes.addOnePers(),
            Attributes.addTwoPers(),
            Attributes.addThreePers(),
            Attributes.addFourPers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_ONE']));
        break;
      }
      case PersonalityEnum.light_hearted : {
        attributes
          .set('pressure', 15, 20)
          .set('sportsmanship', 15, 20)
          .set('temperament', 10, 20)
          .set('professionalism', 1, 17)
          .setDoubleCases([
            Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_TWO', 'CASE_FOUR', 'CASE_SIX', 'CASE_SEVEN'])
          );
        break;
      }
      case PersonalityEnum.spirited : {
        attributes
          .set('pressure', 15, 20)
          .set('sportsmanship', 1, 14)
          .set('temperament', 10, 20)
          .set('professionalism', 11, 17)
          .setDoubleCases([
            Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_FOUR', 'CASE_FIVE', 'CASE_SIX', 'CASE_SEVEN'])
          );
        break;
      }
      case PersonalityEnum.jovial : {
        attributes
          .set('pressure', 15, 20)
          .set('sportsmanship', 1, 14)
          .set('temperament', 10, 20)
          .set('professionalism', 1, 10)
          .setDoubleCases([
            Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, [
              'CASE_ONE', 'CASE_TWO', 'CASE_FOUR', 'CASE_FIVE', 'CASE_SIX', 'CASE_SEVEN'
            ])
          );
        break;
      }
      case PersonalityEnum.resolute : {
        attributes
          .set('professionalism', 15, 20)
          .set('determination', 15, 20)
          .set('sportsmanship', 5, 20)
          .set('pressure', 1, 16)
          .setDoubleCases([
            Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers(), Attributes.addFivePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.fairly_professional : {
        attributes
          .set('professionalism', 15, 20)
          .set('determination', 1, 14)
          .setDoubleCases([
            Attributes.addOnePers(), Attributes.addTwoPers(), Attributes.addThreePers(), Attributes.addFourPers(), Attributes.addFivePers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_THREE', 'CASE_FOUR', 'CASE_FIVE'])
          );
        break;
      }
      case PersonalityEnum.fairly_determined : {
        attributes
          .set('determination', 15, 20)
          .set('professionalism', 1, 14)
          .set('sportsmanship', 5, 20)
          .set('pressure', 1, 16)
          .setDoubleCases([
            Attributes.addAsteriskPers(),
            Attributes.addTwoPers(),
            Attributes.addThreePers(),
            Attributes.addFourPers(),
            Attributes.addFivePers()
          ])
          .setFromDetermination(this.calculateParamFromDetermination(determination, ['CASE_SEVEN']));
        break;
      }
      case PersonalityEnum.fairly_amibitous : {
        attributes
          .set('ambition', 15, 20)
          .set('professionalism', 1, 14)
          .set('determination', 1, 14)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addTwoPers(), Attributes.addFivePers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_TWO', 'CASE_THREE', 'CASE_FOUR', 'CASE_FIVE'])
          );
        break;
      }
      case PersonalityEnum.fairly_loyal : {
        attributes
          .set('loyalty', 15, 20)
          .set('professionalism', 1, 14)
          .set('determination', 1, 14)
          .set('ambition', 6, 14)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addFourPers(), Attributes.addFivePers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_TWO', 'CASE_THREE', 'CASE_FOUR', 'CASE_FIVE'])
          );
        break;
      }
      case PersonalityEnum.fairly_sporting : {
        attributes
          .set('sportsmanship', 15, 20)
          .set('professionalism', 1, 14)
          .set('determination', 1, 14)
          .set('ambition', 1, 14)
          .set('loyalty', 1, 14)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addFivePers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_TWO', 'CASE_THREE', 'CASE_FOUR'])
          );
        break;
      }
      case PersonalityEnum.balanced : {
        attributes
          .set('professionalism', 1, 14)
          .set('determination', 1, 14)
          .set('ambition', 1, 14)
          .set('loyalty', 1, 14)
          .set('sportsmanship', 1, 14)
          .setDoubleCases([
            Attributes.addAsteriskPers(), Attributes.addThreePers(), Attributes.addFivePers()
          ])
          .setFromDetermination(
            this.calculateParamFromDetermination(determination, ['CASE_ONE', 'CASE_TWO', 'CASE_THREE', 'CASE_FIVE'])
          );
        break;
      }
      default:
        break;
    }
    return attributes;
  }

}
