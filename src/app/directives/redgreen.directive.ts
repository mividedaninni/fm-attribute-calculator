import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appRedgreen]'
})
export class RedgreenDirective implements OnChanges {

  @Input('appRedgreen') numberValue: number;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.numberValue) {
      return;
    }
    this.highlight(this.numberValue);
  }

  private highlight(value: number) {
    this.el.nativeElement.style.color = value < 12 ? 'red' : 'green';
  }

}
