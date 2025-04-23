import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    funcionarios: { id: number, nome: string }[] = [];  


    aoAdicionar(funcionario: { id: number, nome: string }) {
      this.funcionarios.push(funcionario);
    }

}
