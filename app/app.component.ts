import { Component } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  template: `
  <pre>{{model | json }}</pre>
      <formly-form [model]="model" [fields]="userFields" [form]="form.at(0)" [options]="options[0]">
        <button type="submit" class="btn btn-default">Submit</button>
      </formly-form>
  `,
})
export class AppComponent {
  form = new FormArray([new FormGroup({})]);

  model = {
    mu: { Opcion1: true },
  };
  options: Array<FormlyFormOptions> = [{
    formState: {
      model: this.model,
    }
  }];
  userFields: Array<FormlyFieldConfig> = [
    {
      key: "mu",
     name:"mu",
      type: "multicheckbox",
      className: "col-6",
      templateOptions: {
        label: "Casilla de verificación (Múltiple)",
        description: "",
        options: [
          {
            key: "Opcion1",
            value: "Opción 1"
          },
          {
            key: "Opcion2",
            value: "Opción2"
          }
        ]
      }
    },
     {
      key: "mu",
      name:"mu",
      type: "multicheckbox",
      className: "col-6",
      templateOptions: {
        label: "Casilla de verificación (Múltiple)",
        description: "",
        options: [
          {
            key: "Opcifsdon1",
            value: "Opciófsdn 1"
          },
          {
            key: "Opcionfsd2",
            value: "Opciofsdn2"
          }
        ]
      }
    }
  ];

  submit(user) {
    console.log(user);
  }
}