import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ButtonDemo } from './components/buttontest/buttontest.component'; // Componente standalone

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule, // Módulos principais para a aplicação
    FormsModule,
    ButtonDemo,   // Aqui você importa o ButtonDemo diretamente, pois ele é standalone
    AppComponent,
  ],
  providers: [], // O AppComponent é usado como ponto de inicialização
})
export class AppModule { }


