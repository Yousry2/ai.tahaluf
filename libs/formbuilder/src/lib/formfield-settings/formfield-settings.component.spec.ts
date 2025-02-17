import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormfieldSettingsComponent } from './formfield-settings.component';

describe('FormfieldSettingsComponent', () => {
  let component: FormfieldSettingsComponent;
  let fixture: ComponentFixture<FormfieldSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormfieldSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormfieldSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
