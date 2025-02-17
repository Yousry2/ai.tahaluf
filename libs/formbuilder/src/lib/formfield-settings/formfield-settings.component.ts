import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  model,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormsModule } from '@angular/forms';
import {
  FormField,
  FormFieldType,
  FromControlType,
} from '@tahaluf/common-util';
import { DynamicFormBuilderService } from '../formbuilder/dynamic-form-builder.service';

@Component({
  selector: 'lib-formfield-settings',
  imports: [CommonModule, FormsModule],
  templateUrl: './formfield-settings.component.html',
  styleUrl: './formfield-settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormfieldSettingsComponent {
  dynamicFormBuilderService = inject(DynamicFormBuilderService);
  selectedField = this.dynamicFormBuilderService.selectedField;
  Object = Object;

  form: any;
  formBuilder = inject(FormBuilder);

  initForm() {}
}
