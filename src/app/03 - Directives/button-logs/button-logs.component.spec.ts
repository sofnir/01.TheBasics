import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogsComponent } from './button-logs.component';

describe('ButtonLogsComponent', () => {
  let component: ButtonLogsComponent;
  let fixture: ComponentFixture<ButtonLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
