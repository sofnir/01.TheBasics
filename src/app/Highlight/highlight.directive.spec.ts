import { Component, DebugElement } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <h1 highlight>Default yellow color<h1>
    <h1 highlight="green">Green color<h1>
  `
})
class TestComponent { }

describe('HighlightDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ HighlightDirective, TestComponent ]
    })
    .createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
  })

  it('should set default color', () => {
    const bgColor = des[0].nativeElement.style.backgroundColor;
    expect(bgColor).toEqual('yellow');
  });

  it('should set specific color', () => {
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toEqual('green');
  });
});
