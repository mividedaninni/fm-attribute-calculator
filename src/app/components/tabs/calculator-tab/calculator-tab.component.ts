import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Attributes} from '../../../classes/attributes';
import {ParamCalculatorService} from '../../../services/param-calculator.service';
import {ClearAttributes} from '../../../classes/clear-attributes';
import {ParamEventsService} from '../../../services/param-events.service';

@Component({
  selector: 'app-calculator-tab',
  templateUrl: './calculator-tab.component.html',
  styleUrls: ['./calculator-tab.component.scss']
})
export class CalculatorTabComponent implements OnInit {
  public finalAttibute: Attributes;
  public clearPersonality = false;
  public clearMedia = false;
  public tooltipText = 'Both determination and personality parameters.';

  private attributeFromPersonality: Observable<Attributes>;
  private attributeFromMedia: Observable<Attributes>;

  constructor(private paramEventsService: ParamEventsService) {
    this.attributeFromPersonality = this.paramEventsService.paramFromPers$;
    this.attributeFromMedia = this.paramEventsService.paramFromMedia$;
    combineLatest([this.paramEventsService.paramFromPers$, this.paramEventsService.paramFromMedia$])
      .subscribe(([fromPers, fromMedia]) => {
        this.finalAttibute = ParamCalculatorService.mergeObj(fromPers, fromMedia);
      });

    this.paramEventsService.clearForm$.subscribe((data) => {
      if (data) {
        this.finalAttibute = null;
      }
    });
  }

  clearForm() {
    const elemToClean = new ClearAttributes();
    if (this.clearPersonality) {
      elemToClean.personality = true;
    }
    if (this.clearMedia) {
      elemToClean.media = true;
    }
    this.paramEventsService.clearFormEmitter(elemToClean);
    this.clearPersonality = this.clearMedia = false;
  }

  ngOnInit(): void {
  }
}
