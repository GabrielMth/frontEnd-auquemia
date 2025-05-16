import { Component } from '@angular/core';
import { LancamentoComponent } from './components/Lancamentos/lancamentoinputs.component';
import { NavbarComponent } from './components/Navbar/navbar.component'
import { ClientesTableComponent } from './components/ClientsTable/clientestable.component';
import { NewlancamentoComponent } from './components/NewLancamento/newlancamento.component';
import { LoginComponent } from './components/Login/login.component';
import { NewclienteComponent } from './components/NewClient/newcliente.component';
import { ClientinfoComponent } from './components/NewClientDetails/clientinfo.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NavbarComponent,ClientesTableComponent],
})
export class AppComponent {

}
