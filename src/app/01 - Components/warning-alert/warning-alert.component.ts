import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css'],
})
export class AppWarningAlert {
  constructor() { }

  public message: string = 'Invalid number';
  public visible: boolean = true;
  public hide = () => this.visible = false;
}
