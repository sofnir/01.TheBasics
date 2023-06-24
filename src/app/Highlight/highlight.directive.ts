import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {
  @Input('highlight') public color = 'yellow';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}
