import {Component, OnInit} from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import {Attributes} from '../../../classes/attributes';
import {ParamCalculatorService} from '../../../services/param-calculator.service';
import {ClearAttributes} from '../../../classes/clear-attributes';

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

  constructor(private paramCalculatorService: ParamCalculatorService) {
    this.attributeFromPersonality = this.paramCalculatorService.paramFromPers$;
    this.attributeFromMedia = this.paramCalculatorService.paramFromMedia$;
    combineLatest([this.paramCalculatorService.paramFromPers$, this.paramCalculatorService.paramFromMedia$])
      .subscribe(([fromPers, fromMedia]) => {
        this.finalAttibute = this.paramCalculatorService.mergeObj(fromPers, fromMedia);
      });

    this.paramCalculatorService.clearForm$.subscribe((data) => {
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
    this.paramCalculatorService.clearFormEmitter(elemToClean);
    this.clearPersonality = this.clearMedia = false;
  }

  ngOnInit(): void {
  }
}
