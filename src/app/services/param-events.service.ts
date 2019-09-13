import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Attributes} from '../classes/attributes';
import {ClearAttributes} from '../classes/clear-attributes';

@Injectable({providedIn: 'root'})
export class ParamEventsService {

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
}
