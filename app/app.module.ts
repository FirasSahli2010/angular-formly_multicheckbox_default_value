import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { formlyFieldTransform } from './formly-field.transform';
import { FormlyFieldMultiCheckbox } from './multicheckbox';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'multicheckbox', component: FormlyFieldMultiCheckbox },
      ]
    }),
    FormlyBootstrapModule,
  ],
  declarations: [AppComponent, FormlyFieldMultiCheckbox],
  bootstrap: [AppComponent]
})
export class AppModule { }
