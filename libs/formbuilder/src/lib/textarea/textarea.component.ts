import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField } from '@tahaluf/common-util';
import { DynamicFormBuilderService } from '../formbuilder/dynamic-form-builder.service';

@Component({
  selector: 'lib-textarea',
  imports: [CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaComponent {
  dynamicFormBuilderService = inject(DynamicFormBuilderService);
  options = input.required<FormField<'textarea'>>();

  selectField() {
    this.dynamicFormBuilderService.selectField(this.options());
  }
}
