import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientesinfo',
  imports: [CardModule,TableModule, CommonModule],
  templateUrl: './clientesinfo.component.html',
  styleUrl: './clientesinfo.component.scss'
})
export class ClientesinfoComponent {

pessoastemporario = [
  {codigo: '1', name: 'Gabriel', dataVencimento: '199/01/01', dataPagamento: null},
  {codigo: '2', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  {codigo: '3', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  {codigo: '4', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  {codigo: '5', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  {codigo: '6', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  {codigo: '7', name: 'Gabriel', dataVencimento: 'dss', dataPagamento: null},
  ]

}
