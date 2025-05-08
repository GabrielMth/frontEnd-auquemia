import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { NewlancamentoComponent } from '../NewLancamento/newlancamento.component';



@Component({
  selector: 'lancamentosforms',
  templateUrl: './lancamentoinputs.component.html',
  standalone: true,
  imports: [FormsModule, DatePicker, FloatLabel, InputTextModule, ButtonModule, TableModule, CommonModule, TooltipModule, CardModule, NewlancamentoComponent],
  styleUrl: './lancamentoinputs.component.scss'
})
export class LancamentoComponent {

  loading: boolean = false;

  exibirDialog = false;

  descricao: string | undefined;
  dataInicio: Date | undefined;
  dataFim: Date | undefined;



  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 9.55, pessoa: 'Aadaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 4.55, pessoa: 'Tadaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 25.55, pessoa: 'Oadaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 2.55, pessoa: 'Qadaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 76.55, pessoa: 'Aadaria do José' },
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2017, 5, 30), dataPagamento: new Date(), valor: 300.55, pessoa: 'Badaria do José' }
  ]

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 350);
  }



  abrirDialog() {
    this.exibirDialog = true;
  }

  aoFecharDialog() {
    this.exibirDialog = false;
  }


}
