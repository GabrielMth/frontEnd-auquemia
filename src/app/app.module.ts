import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent // componente appcomponent pertence ao AppModule., pipes diretivas, ....
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
