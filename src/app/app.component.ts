import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome  = 'Gabriel';
  adicionado = false;
  funcionarios: { id: number, nome: string }[] = [];
  id = 0;

  adicionar() {
    console.log(`Adicionado ${this.nome}`); // usando template literals. ao inves de concatenar
    this.adicionado = true;

    this.funcionarios.push({
      id: ++this.id,
      nome: this.nome
    });
  }

}
