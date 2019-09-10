import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MediaHandlingEnum} from '../../../../classes/media-handling.enum';
import {ParamCalculatorService} from '../../../../services/param-calculator.service';

@Component({
  selector: 'app-select-media',
  templateUrl: './select-media.component.html',
  styleUrls: ['./select-media.component.scss']
})
export class SelectMediaComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public mediaHandlingOptions: typeof MediaHandlingEnum = MediaHandlingEnum;
  public subs: Subscription[] = [];
  public mediaHandingFormControl: AbstractControl;

  constructor(private fb: FormBuilder, private paramCalculatorService: ParamCalculatorService) {
    this.formGroup = this.fb.group({
        mediaHandling: [null, Validators.required]
      }
    );
    this.mediaHandingFormControl = this.formGroup.get('mediaHandling');
    this.subs.push(
      this.paramCalculatorService.clearForm$.subscribe((data) => {
        if (data && data.media) {
          this.mediaHandingFormControl.patchValue(null);
        }
      })
    );
  }

  ngOnInit(): void {
    this.changeMH();
  }

  changeMH(): void {
    this.subs.push(
      this.mediaHandingFormControl.valueChanges.subscribe((data) => {
        if (data) {
          const attributes = ParamCalculatorService.calculateBaseParamFromMediaHandling(data);
          this.paramCalculatorService.setParamMedia(attributes);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((e) => e.unsubscribe());
  }
}
