import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuccessAlertComponent } from './success-alert.component';

describe('SuccessAlertComponent', () => {
  let component: AppSuccessAlertComponent;
  let fixture: ComponentFixture<AppSuccessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSuccessAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSuccessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
