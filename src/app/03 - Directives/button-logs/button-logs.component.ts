import { Component } from '@angular/core';

@Component({
  selector: 'app-button-logs',
  templateUrl: './button-logs.component.html',
  styleUrls: ['./button-logs.component.css']
})
export class ButtonLogsComponent {
  public showPassword: boolean = false;
  public logs: string[] = [];

  public togglePasswordShowing(): void {
    this.showPassword = !this.showPassword;
    this.logs.push(new Date().toTimeString());
  }
}
