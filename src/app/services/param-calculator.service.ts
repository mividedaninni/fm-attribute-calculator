import {Injectable} from '@angular/core';
import {Attributes} from '../classes/attributes';
import {PersonalityEnum} from '../classes/personality.enum';
import {MinMax} from '../classes/min-max';
import {MediaHandlingEnum} from '../classes/media-handling.enum';
import {Observable, Subject} from 'rxjs';
import {ClearAttributes} from '../classes/clear-attributes';

@Injectable({providedIn: 'root'})
export class ParamCalculatorService {

  public paramFromPers$: Observable<Attributes>;
  public clearForm$: Observable<ClearAttributes>;
  public paramFromMedia$: Observable<Attributes>;
  private paramFromPersSubject: Subject<Attributes> = new Subject<Attributes>();
  private paramFromMediaSubject: Subject<Attributes> = new Subject<Attributes>();
  private clearFormSubject: Subject<ClearAttributes> = new Subject<ClearAttributes>();

  constructor() {
    this.paramFromPers$ = this.paramFromPersSubject.asObservable();
    this.paramFromMedia$ = this.paramFromMediaSubject.asObservable();
    this.clearForm$ = this.clearFormSubject.asObservable();
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addSixPersonality());
        break;
      }
      case PersonalityEnum.determined : {
        attributes.determination = new MinMax(18, 19);
        attributes.ambition = new MinMax(10, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addSixPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.amibitous : {
        attributes.ambition = new MinMax(16, 19);
        attributes.loyalty = new MinMax(1, 9);
        attributes.determination = new MinMax(1, 17);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.unambitious : {
        attributes.ambition = new MinMax(1, 5);
        attributes.loyalty = new MinMax(11, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        if (this.calculateParamFromDetermination(determination, [2])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2]);
        }
        break;
      }
      case PersonalityEnum.honest : {
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        break;
      }
      case PersonalityEnum.sporting : {
        attributes.sportsmanship = new MinMax(18, 19);
        attributes.determination = new MinMax(1, 9);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        break;
      }
      case PersonalityEnum.easily_discouraged : {
        attributes.determination = new MinMax(1);
        attributes.ambition = new MinMax(1, 9);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        break;
      }
      case PersonalityEnum.low_determination : {
        attributes.determination = new MinMax(2, 5);
        attributes.ambition = new MinMax(1, 9);
        attributes.sportsmanship = new MinMax(1, 17);
        attributes.professionalism = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        break;
      }
      case PersonalityEnum.unsporting : {
        attributes.sportsmanship = new MinMax(1);
        attributes.determination = new MinMax(11, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.realist : {
        attributes.sportsmanship = new MinMax(2, 4);
        attributes.determination = new MinMax(11, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.very_loyal : {
        attributes.loyalty = new MinMax(20);
        attributes.ambition = new MinMax(6, 7);
        attributes.determination = new MinMax(6, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        if (this.calculateParamFromDetermination(determination, [2, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2, 5]);
        }
        break;
      }
      case PersonalityEnum.loyal : {
        attributes.loyalty = new MinMax(18, 19);
        attributes.ambition = new MinMax(6, 7);
        attributes.determination = new MinMax(6, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        if (this.calculateParamFromDetermination(determination, [2, 5])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [2, 5]);
        }
        break;
      }
      case PersonalityEnum.iron_willed : {
        attributes.pressure = new MinMax(20);
        attributes.determination = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.resilient : {
        attributes.pressure = new MinMax(17, 19);
        attributes.determination = new MinMax(15, 20);
        attributes.sportsmanship = new MinMax(5, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.fairly_professional : {
        attributes.professionalism = new MinMax(15, 20);
        attributes.determination = new MinMax(1, 14);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOnePersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
        if (this.calculateParamFromDetermination(determination, [7])) {
          attributes.fromDetermination = this.calculateParamFromDetermination(determination, [7]);
        }
        break;
      }
      case PersonalityEnum.fairly_amibitous : {
        attributes.ambition = new MinMax(15, 20);
        attributes.professionalism = new MinMax(1, 14);
        attributes.determination = new MinMax(1, 14);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addTwoPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addFourPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addAsteriskPersonality());
        attributes.doubleCases.push(Attributes.addThreePersonality());
        attributes.doubleCases.push(Attributes.addFivePersonality());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
        break;
      }
      case MediaHandlingEnum.outspoken: {
        attributes.controversy = new MinMax(15, 20);
        attributes.temperament = new MinMax(7, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
        break;
      }
      case MediaHandlingEnum.evasive: {
        attributes.controversy = new MinMax(6, 14);
        attributes.temperament = new MinMax(7, 14);
        attributes.pressure = new MinMax(15, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
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
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        break;
      }
      case MediaHandlingEnum.reserved: {
        attributes.controversy = new MinMax(1, 5);
        attributes.temperament = new MinMax(7, 20);
        attributes.loyalty = new MinMax(11, 20);
        attributes.professionalism = new MinMax(13, 20);
        attributes.pressure = new MinMax(1, 14);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addThreeMedia());
        break;
      }
      case MediaHandlingEnum.levelHeaded: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7, 20);
        attributes.loyalty = new MinMax(11, 20);
        attributes.doubleCases = [];
        // const doubl = new Attributes();
        // doubl.sportsmanship = new MinMax(12, 20);
        // doubl.professionalism = new MinMax(13, 20);
        // attributes.doubleCases.push(doubl);
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
        attributes.doubleCases.push(Attributes.addFiveMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_unflappable: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(15, 20);
        attributes.pressure = new MinMax(15, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_shortTempered: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(1, 2);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_volatile: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(3, 6);
        attributes.sportsmanship = new MinMax(8, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_confrontational: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7);
        attributes.sportsmanship = new MinMax(1, 7);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly_reserved: {
        attributes.controversy = new MinMax(1, 5);
        attributes.temperament = new MinMax(7, 20);
        attributes.professionalism = new MinMax(15, 20);
        attributes.loyalty = new MinMax(1, 10);
        attributes.pressure = new MinMax(1, 14);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
        break;
      }
      case MediaHandlingEnum.mediaFrendly: {
        attributes.controversy = new MinMax(1, 14);
        attributes.temperament = new MinMax(7, 20);
        attributes.doubleCases = [];
        attributes.doubleCases.push(Attributes.addOneMedia());
        attributes.doubleCases.push(Attributes.addTwoMedia());
        attributes.doubleCases.push(Attributes.addThreeMedia());
        attributes.doubleCases.push(Attributes.addFourMedia());
        attributes.doubleCases.push(Attributes.addFiveMedia());
        break;
      }
      default: {
        break;
      }
    }
    return attributes;
  }

  private static evaluateMinMaxAttribute(firstAttributeObject: Attributes, secondAttributeObject: Attributes, elem: string): MinMax {
    let min;
    let max;
    if (firstAttributeObject[elem].max < secondAttributeObject[elem].min) {
      min = secondAttributeObject[elem].min;
      max = secondAttributeObject[elem].max;
    } else if (secondAttributeObject[elem].max < firstAttributeObject[elem].max) {
      min = firstAttributeObject[elem].min;
      max = firstAttributeObject[elem].max;
    } else {
      max = Math.min(firstAttributeObject[elem].max, secondAttributeObject[elem].max);
      min = Math.max(firstAttributeObject[elem].min, secondAttributeObject[elem].min);
    }
    return new MinMax(min, max);
  }

  public setParamPers(value: Attributes) {
    this.paramFromPersSubject.next(value);
  }

  public setParamMedia(value: Attributes) {
    this.paramFromMediaSubject.next(value);
  }

  public clearFormEmitter(value: ClearAttributes) {
    if (value.personality) {
      this.paramFromPersSubject.next(null);
    }
    if (value.media) {
      this.paramFromMediaSubject.next(null);
    }
    this.clearFormSubject.next(value);
  }

  public mergeObj(attrFromPers: Attributes, attrFromMedia: Attributes) {
    if (!attrFromPers || !attrFromMedia) {
      return null;
    }

    const retObj = new Attributes();

    const keysPers = Object.keys(attrFromPers).filter((key) => {
      return !(key in attrFromMedia) && !(attrFromPers[key] instanceof Array || attrFromPers[key] instanceof Attributes);
    });
    if (keysPers.length > 0) {
      keysPers.forEach((key) => {
        retObj[key] = attrFromPers[key];
      });
    }
    const keysMedia = Object.keys(attrFromMedia).filter((key) => {
      return !(key in attrFromPers) && !(attrFromMedia[key] instanceof Array);
    });
    if (keysMedia.length > 0) {
      keysMedia.forEach((key) => {
        retObj[key] = attrFromMedia[key];
      });
    }

    Object.keys(attrFromPers)
      .filter((key) => key in attrFromMedia && !(attrFromPers[key] instanceof Array || attrFromPers[key] instanceof Attributes))
      .forEach((elem) => {
        retObj[elem] = ParamCalculatorService.evaluateMinMaxAttribute(attrFromPers, attrFromMedia, elem);
      });

    if (attrFromPers.fromDetermination) {
      Object.keys(attrFromPers.fromDetermination)
        .filter((key) => key in retObj)
        .forEach((elem) => {
          retObj[elem] = ParamCalculatorService.evaluateMinMaxAttribute(attrFromPers.fromDetermination, retObj, elem);
        });
    }

    const arr2Pers = attrFromPers.doubleCases !== undefined ? attrFromPers.doubleCases : [];
    const arr2Media = attrFromMedia.doubleCases !== undefined ? attrFromMedia.doubleCases : [];
    const arrDouble = [...arr2Pers, ...arr2Media];
    arrDouble.forEach((doubleElement) => {
      if (Object.keys(doubleElement).length !== 2) {
        const first = Object.keys(doubleElement)[0];
        const second = Object.keys(doubleElement)[1];
        const third = Object.keys(doubleElement)[2];
        if (retObj[first]) {
          if (doubleElement[first].max < retObj[first].min || doubleElement[first].min > retObj[first].max) {
            [second, third].forEach((elemToAdd) => {
              retObj[elemToAdd] = retObj[elemToAdd]
                ? ParamCalculatorService.evaluateMinMaxAttribute(doubleElement, retObj, elemToAdd)
                : new MinMax(doubleElement[elemToAdd].min, doubleElement[elemToAdd].max);
            });
          }
        }
        if (retObj[second] && retObj[third]) {
          if (
            (doubleElement[second].max < retObj[second].min || doubleElement[second].min > retObj[second].max) &&
            (doubleElement[third].max < retObj[third].min || doubleElement[third].min > retObj[third].max)
          ) {
            retObj[first] = retObj[first]
              ? ParamCalculatorService.evaluateMinMaxAttribute(doubleElement, retObj, first)
              : new MinMax(doubleElement[first].min, doubleElement[first].max);
          }
        }
      } else {
        Object.keys(doubleElement).forEach((key, index) => {
          if (retObj[key]) {
            if (doubleElement[key].max < retObj[key].min || doubleElement[key].min > retObj[key].max) {
              let elemToAdd;
              if (index === 0) {
                elemToAdd = Object.keys(doubleElement)[1];
              } else if (index === 1) {
                elemToAdd = Object.keys(doubleElement)[0];
              }
              retObj[elemToAdd] = retObj[elemToAdd]
                ? ParamCalculatorService.evaluateMinMaxAttribute(doubleElement, retObj, elemToAdd)
                : new MinMax(doubleElement[elemToAdd].min, doubleElement[elemToAdd].max);
            }
          }
        });
      }
    });
    return retObj;
  }

}
