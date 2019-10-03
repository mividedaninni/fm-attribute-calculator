import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Attributes} from '../../../../classes/attributes';
import {AttributesDescription} from '../../../../classes/attributes-description';
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-calculator-results',
  templateUrl: './calculator-results.component.html',
  styleUrls: ['./calculator-results.component.scss']
})
export class CalculatorResultsComponent implements OnInit, OnChanges {

  @Input() results: Attributes;
  public keys: Array<KeyValue<string, string>>;

  constructor() {
  }

  ngOnInit() {
  }

  public trackByFn(index: number, item): number {
    if (!item) {
      return null;
    }
    return index;
  }

  ngOnChanges() {
    if (!this.results) {
      return;
    }

    this.keys = Object.keys(this.results).map((elem) => {
      return {
        key: elem,
        value: AttributesDescription.getDescriptionFromKey(elem)
      };
    });
  }
}
