import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Attributes} from '../../../classes/attributes';
import {ParamCalculatorService} from '../../../services/param-calculator.service';
import {ParamEventsService} from '../../../services/param-events.service';

@Component({
  selector: 'app-calculator-tab',
  templateUrl: './calculator-tab.component.html',
  styleUrls: ['./calculator-tab.component.scss']
})
export class CalculatorTabComponent implements OnInit {
  public finalAttibute: Attributes;

  private attributeFromPersonality: Observable<Attributes>;
  private attributeFromMedia: Observable<Attributes>;

  constructor(private paramEventsService: ParamEventsService) {
    this.attributeFromPersonality = this.paramEventsService.paramFromPers$;
    this.attributeFromMedia = this.paramEventsService.paramFromMedia$;
    combineLatest([this.paramEventsService.paramFromPers$, this.paramEventsService.paramFromMedia$])
      .subscribe(([fromPers, fromMedia]) => {
        this.finalAttibute = ParamCalculatorService.mergeObj(fromPers, fromMedia);
      });

    this.paramEventsService.clearForm$.subscribe((data: boolean) => {
      if (data) {
        this.finalAttibute = null;
      }
    });
  }

  clearForm() {
    this.paramEventsService.clearFormEmitter(true);
  }

  ngOnInit(): void {
  }
}
