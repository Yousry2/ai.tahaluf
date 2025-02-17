import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormField } from '@tahaluf/common-util';
import { DynamicFormBuilderService } from '../formbuilder/dynamic-form-builder.service';

@Component({
  selector: 'lib-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// implements FieldComponentInterface<'button'>
export class ButtonComponent {
  dynamciFormBuilderService = inject(DynamicFormBuilderService);
  options = input.required<FormField<'button'>>();
  SelectedField = output<FormField<'button'>>();

  selectField() {
    this.dynamciFormBuilderService.selectField(this.options());
  }
}
