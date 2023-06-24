import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WarningAlert } from './01 - Components/warning-alert/warning-alert.component';

import { AppComponent } from './app.component';
import { HighlightDirective } from './Highlight/highlight.directive';
import { SuccessAlertComponent } from './01 - Components/success-alert/success-alert.component';
import { FormComponent } from './02 - Databinding/form/form.component';
import { ButtonLogsComponent } from './03 - Directives/button-logs/button-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    WarningAlert,
    SuccessAlertComponent,
    FormComponent,
    ButtonLogsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
