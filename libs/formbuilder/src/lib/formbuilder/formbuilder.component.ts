import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-formbuilder',
  imports: [CommonModule],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormbuilderComponent {}
