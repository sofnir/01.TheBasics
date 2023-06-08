import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppWarningAlert } from './01 - Components/warning-alert/warning-alert.component';

import { AppComponent } from './app.component';
import { TurnGreenDirective } from './TurnGreen/turn-green.directive';
import { SuccessAlertComponent } from './01 - Components/success-alert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnGreenDirective,
    AppWarningAlert,
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
