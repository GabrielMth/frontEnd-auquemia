import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forms-funcionario',
  standalone: false,
  templateUrl: './forms-funcionario.component.html',
  styleUrl: './forms-funcionario.component.css'
})
export class FormsFuncionarioComponent {

  nome  = 'Gabriel';
  adicionado = false;
  id = 0;
  @Output() funcionarioAdicionado = new EventEmitter<{ id: number, nome: string }>();


  adicionar() {
    console.log(`Adicionado ${this.nome}`); 
    this.adicionado = true;

    const funcionario = ({
      id: ++this.id,
      nome: this.nome
    });

    this.funcionarioAdicionado.emit(funcionario);

  }
}
