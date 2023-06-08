import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppWarningAlert } from './01 - Components/warning-alert/warning-alert.component';

import { AppComponent } from './app.component';
import { TurnGreenDirective } from './TurnGreen/turn-green.directive';
import { AppSuccessAlertComponent } from './01 - Components/success-alert/success-alert.component';
import { AppFormComponent } from './02 - Databinding/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnGreenDirective,
    AppWarningAlert,
    AppSuccessAlertComponent,
    AppFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
