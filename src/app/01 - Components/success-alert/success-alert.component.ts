import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class AppSuccessAlertComponent {
  constructor() { }

  public message: string = 'Correct number';
  public visible: boolean = true;
  public hide = () => this.visible = false;
}
