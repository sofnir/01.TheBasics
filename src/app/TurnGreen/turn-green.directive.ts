import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTurnGreen]'
})
export class TurnGreenDirective implements OnInit {
  @Input() public color= '';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
