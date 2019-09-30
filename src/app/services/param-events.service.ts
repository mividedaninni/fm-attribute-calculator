import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Attributes} from '../classes/attributes';

@Injectable({providedIn: 'root'})
export class ParamEventsService {

  public paramFromPers$: Observable<Attributes>;
  public paramFromMedia$: Observable<Attributes>;
  public clearForm$: Observable<boolean>;
  private paramFromPersSubject: Subject<Attributes> = new Subject<Attributes>();
  private paramFromMediaSubject: Subject<Attributes> = new Subject<Attributes>();
  private clearFormSubject: Subject<boolean> = new Subject<boolean>();

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

  public clearFormEmitter(value: boolean) {
    this.paramFromPersSubject.next(null);
    this.paramFromMediaSubject.next(null);
    this.clearFormSubject.next(value);
  }
}
