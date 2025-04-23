import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { FuncionarCardComponent } from './funcionar-card/funcionar-card.component';
import { FormsFuncionarioComponent } from './forms-funcionario/forms-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    FuncionarCardComponent,
    FormsFuncionarioComponent // componente appcomponent pertence ao AppModule., pipes diretivas, ....
  ],
  imports: [
    BrowserModule, // inclui coisas basicas e importantes como diretivas.
    AppRoutingModule,
    FormsModule
  ],
  providers: [], // serviços.
  bootstrap: [AppComponent] //componente principal que vai subir tudo no app
})
export class AppModule { }
