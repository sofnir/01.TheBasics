import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  public username: string = '';
  public highlight: boolean = false;
  public buttonDisabled: boolean = true;

  public resetUsername(): void {
    this.username = '';
    this.buttonDisabled = true;
  };

  public updateButtonDisabled(event: KeyboardEvent): void {
    const value: string = (event.target as HTMLInputElement).value
    this.buttonDisabled = value === '';
  }
}
