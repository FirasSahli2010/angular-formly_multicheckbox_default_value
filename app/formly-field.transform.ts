
import {FormlyFieldConfig} from '@ngx-formly/core';

export function evalStringExpression(expression: string, argNames: string[]) {
  try {
    return Function.bind.apply(Function, [void 0].concat(argNames.concat(`return ${expression};`)))();
  } catch (error) {
    console.error(error);
  }
}

export function formlyFieldTransform(fields: FormlyFieldConfig[]) {
  fields.forEach(field => {
    if (field.fieldGroup && field.fieldGroup.length > 0) {
      if (field.key && field.fieldGroup && field.fieldGroup.length > 0 && field.expressionProperties && field.expressionProperties.hasOwnProperty('templateOptions.disabled')) {
        field.fieldGroup.forEach(f => {
          f.expressionProperties = f.expressionProperties || {};
          let disabledExpression: any = f.expressionProperties['templateOptions.disabled'] || (() => false);
          if (typeof disabledExpression === 'string') {
            disabledExpression = evalStringExpression(disabledExpression, ['model', 'formState']);
          }

          f.expressionProperties['templateOptions.disabled'] = (model: any, formState: any) => field.templateOptions.disabled || disabledExpression(model, formState);
        });
      }
      formlyFieldTransform(field.fieldGroup);
    }
  });

  return fields;
}
