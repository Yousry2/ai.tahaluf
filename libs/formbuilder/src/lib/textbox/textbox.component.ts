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
  selector: 'lib-textbox',
  imports: [CommonModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextboxComponent {
  dynamicFormBuilderService = inject(DynamicFormBuilderService);
  options = input.required<FormField<'textbox'>>();
  selectField() {
    this.dynamicFormBuilderService.selectField(this.options());
  }
}
