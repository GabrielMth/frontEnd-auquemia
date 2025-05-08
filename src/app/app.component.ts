import { Component} from '@angular/core';
import { LancamentoComponent } from './components/lancamentos/lancamentoinputs.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ClientesTableComponent } from './components/clientestable/clientestable.component';
import { NewlancamentoComponent } from './components/newlancamento/newlancamento.component';
import { LoginComponent } from './components/login/login.component';
import { NewclienteComponent } from './components/newcliente/newcliente.component';
import { ClientinfoComponent } from './components/clientinfo/clientinfo.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LancamentoComponent, NavbarComponent, ClientesTableComponent, NewlancamentoComponent, LoginComponent,
            NewclienteComponent, ClientinfoComponent]
})
export class AppComponent {

}
