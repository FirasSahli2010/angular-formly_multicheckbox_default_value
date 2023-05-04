import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-multicheckbox',
  template: `
    <div class="custom-control custom-checkbox" *ngFor="let option of to.options; let i = index;">
      <input class="custom-control-input" type="checkbox"
        [id]="id + '_' + i"
        [value]="option.key"
        [checked]="formControl.value && formControl.value[option.key]"
        [formlyAttributes]="field"
        (change)="onChange(option.key, $event.target.checked)">
      <label class="custom-control-label" [for]="id + '_' + i">
        {{ option.value }}
      </label>
    </div>
  `,
})
export class FormlyFieldMultiCheckbox extends FieldType {
  onChange(value, checked) {
    this.formControl.patchValue({ ...this.formControl.value, [value]: checked });
    this.formControl.markAsTouched();
  }
}