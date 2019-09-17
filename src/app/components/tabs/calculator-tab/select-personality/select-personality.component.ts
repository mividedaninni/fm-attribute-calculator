import {Component, OnDestroy, OnInit} from '@angular/core';
import {PersonalityEnum} from '../../../../classes/personality.enum';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Attributes} from '../../../../classes/attributes';
import {InputErrorMatcher} from '../../../../classes/input-error-matcher';
import {ParamCalculatorPersonality} from '../../../../services/param-calculator-personality';
import {ParamEventsService} from '../../../../services/param-events.service';
import {AttributeValueTypes} from '../../../../classes/attribute-value-types';

@Component({
  selector: 'app-select-personality',
  templateUrl: './select-personality.component.html',
  styleUrls: ['./select-personality.component.scss']
})
export class SelectPersonalityComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public personalityOptions: typeof PersonalityEnum = PersonalityEnum;
  public subs: Subscription[] = [];
  public matcher = new InputErrorMatcher();
  public detValue: number;
  public determinationFormControl: AbstractControl;
  public personalityFormControl: AbstractControl;

  constructor(private fb: FormBuilder, private paramEventsService: ParamEventsService) {
    this.formGroup = this.fb.group({
        determination: [null, [Validators.required, Validators.min(1), Validators.max(20)]],
        personality: [{value: null, disabled: true}, [Validators.required]]
      }
    );
    this.determinationFormControl = this.formGroup.get('determination');
    this.personalityFormControl = this.formGroup.get('personality');
    this.subs.push(
      this.determinationFormControl.valueChanges.subscribe((data) => {
        if (data && data > 0 && data < 21) {
          this.detValue = data;
          this.personalityFormControl.enable();
        } else {
          this.detValue = null;
          this.personalityFormControl.patchValue(null);
          this.personalityFormControl.disable();
        }
      }),
      this.personalityFormControl.valueChanges.subscribe((personality) => {
        if (this.detValue && personality) {
          const attributes: Attributes =
            ParamCalculatorPersonality.calculateBaseParamFromPersonality(this.detValue, personality);
          attributes.set('determination', (this.detValue) as AttributeValueTypes);
          this.paramEventsService.setParamPers(attributes);
        }
      }),
      this.paramEventsService.clearForm$.subscribe((data) => {
        if (data && data.personality) {
          this.determinationFormControl.patchValue(null);
        }
      })
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subs.forEach((e) => e.unsubscribe());
  }
}
