import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  standalone: false,
  templateUrl: './funcionar-card.component.html',
  styleUrl: './funcionar-card.component.css'
})
export class FuncionarCardComponent {
  
  @Input('obj') funcionario: any;

}
