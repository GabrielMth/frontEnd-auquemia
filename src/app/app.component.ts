import { Component} from '@angular/core';
import { LancamentoComponent } from './components/lancamentos/lancamentoinputs.component';
import { NavbarComponent } from './components/navbar/navbar.component'
import { ClientesinfoComponent } from './components/clientesinfo/clientesinfo.component';
import { NewlancamentoComponent } from "./components/newlancamento/newlancamento.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LancamentoComponent, NavbarComponent, ClientesinfoComponent, NewlancamentoComponent]
})
export class AppComponent {

}
