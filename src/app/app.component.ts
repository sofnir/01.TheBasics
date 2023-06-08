import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = '01.TheBasics';
  public isAdmin = true;

  public toggleAdmin(): void {
    this.isAdmin = !this.isAdmin;
  }

  public name: string = '';

  public shouldBeYellow: boolean = false;

  public onInput(event: any): void {
    const value: string = (event.target as HTMLInputElement).value;
    console.log(value, this.name);
    this.shouldBeYellow = value === 'Maciek';
  }
}
