export class MinMax {
  private min: number;
  private max: number;

  constructor(min: number, max?: number) {
    if (min <= 0 || min > 20 || (max && max <= 0 && max > 20)) {
      alert('Errore');
      return;
    }
    this.min = min;
    max ? this.max = max : this.max = min;
  }
}
