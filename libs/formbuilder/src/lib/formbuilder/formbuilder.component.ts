import { AfterViewInit, ChangeDetectionStrategy, Component, inject, signal, viewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { DynamicFormBuilderService } from './dynamic-form-builder.service';
import { ComponentConfig, FormField, FormFieldType } from '@tahaluf/common-util';
import { FormfieldSettingsComponent } from '../formfield-settings/formfield-settings.component';


@Component({
  selector: 'lib-formbuilder',
  imports: [CommonModule, FormfieldSettingsComponent],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent implements AfterViewInit {


  container = viewChild('container',{read : ViewContainerRef} );
  dynamicFormBuilder = inject(DynamicFormBuilderService);
  fields : ComponentConfig<any>[] = [];

  selectedFormField = signal<FormField<FormFieldType> | null>(null);

  ngAfterViewInit(): void {
    this.fields = this.dynamicFormBuilder.createForm(this.jsonData);
    this.fields.forEach(async (field) => {
      const componentInstance = await field.component();
      const ref = this.container()?.createComponent(componentInstance);
      ref?.setInput('options', field.options);
      
    });
  }





  selectButton(field: FormField<FormFieldType>) {
    this.selectedFormField.set(field);
  }



  jsonData : FormField<FormFieldType>[]= [
    {
      type: 'textbox',
      name: 'firstTextbox',
      id: 'c4c9f16d-7d1b-47c4-b623-34908be3f94e',
      border: {
        color: 'black',
        size: '1px',
      },
      placeholder: 'Enter text here',
    },

    {
      type: 'textarea',
      name: 'firstTextarea',
      id: 'b3d25b74-b678-4b1f-bff9-bd2fe7bb7b6f',
      border: {
        color: 'blue',
        size: '1px',
      },

      rows: 5,
      cols: 30,
    },

    {
      type: 'button',
      name: 'firstButton',
      id: 'ae6fa48e-fc92-4d0b-8c67-d1cf179dfb8a',
      border: {
        color: 'green',
        size: 'none',
      },

      caption: 'Click Me',
    },

    {
      type: 'textarea',
      name: 'secondTextarea',
      id: 'a2871f9e-c79c-4a39-8b5b-909b77bffb33',

      border: {
        color: 'red',
        size: '2px',
      },

      rows: 8,
      cols: 40,
    },

    {
      type: 'textarea',
      name: 'thirdTextarea',
      id: '99fa5fd8-c905-4f0c-8e88-d98da578736f',

      border: {
        color: 'purple',
        size: '1px',
      },

      rows: 6,
      cols: 35,
    },
  ];
}
