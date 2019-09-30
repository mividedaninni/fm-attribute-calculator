import {Attributes} from '../classes/attributes';
import {MinMax} from '../classes/min-max';

export class ParamCalculatorService {

  public static mergeObj(attrFromPers: Attributes, attrFromMedia: Attributes) {
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

    const attrFromDet: Attributes = attrFromPers.getFromDetermination();
    if (attrFromDet) {
      Object.keys(attrFromDet)
        .filter((key) => key in retObj)
        .forEach((elem) => {
          retObj[elem] = ParamCalculatorService.evaluateMinMaxAttribute(attrFromDet, retObj, elem);
        });
    }

    const arr2Pers = attrFromPers.getDoubleCases() !== undefined ? attrFromPers.getDoubleCases() : [];
    const arr2Media = attrFromMedia.getDoubleCases() !== undefined ? attrFromMedia.getDoubleCases() : [];
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

}
