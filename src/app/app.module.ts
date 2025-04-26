import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, // Módulos principais para a aplicação
    FormsModule,
    ButtonModule,   // Aqui você importa o ButtonDemo diretamente, pois ele é standalone
    AppComponent,
    InputTextModule,
    DatePickerModule,
  ],
  providers: [],
})
export class AppModule { }


