import { Injectable, signal } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ComponentConfig,
  FormField,
  FormFieldType,
} from '@tahaluf/common-util';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormBuilderService {
  selectedField = signal<FormField<FormFieldType>| null>(null);
  createForm(
    jsonData: FormField<FormFieldType>[]
  ): ComponentConfig<FormFieldType>[] {
    const ComponentConfig: ComponentConfig<FormFieldType>[] = [];
    for (let i = 0; i < jsonData.length; i++) {
      const fieldData = jsonData[i];
      if (fieldData.type === 'textbox') {
        ComponentConfig.push({
          component: async () =>
            (await import('../textbox/textbox.component')).TextboxComponent,
          fieldType: 'textbox',
          options: {
            ...fieldData,
          },
        });
      } else if (fieldData.type === 'button') {
        ComponentConfig.push({
          component: async () =>
            (await import('../button/button.component')).ButtonComponent,
          fieldType: 'textbox',
          options: {
            ...fieldData,
          },
        });
      } else if (fieldData.type === 'textarea') {
        ComponentConfig.push({
          component: async () =>
            (await import('../textarea/textarea.component')).TextareaComponent,
          fieldType: 'textbox',
          options: {
            ...fieldData,
          },
        });
      }
    }
    return ComponentConfig;
  }

  selectField(field: FormField<FormFieldType>) {
    this.selectedField.set(field);
  }
}
