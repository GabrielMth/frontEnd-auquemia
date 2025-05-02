import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IftaLabelModule } from 'primeng/iftalabel';


@Component({
  selector: 'app-clientesinfo',
  imports: [CardModule, TableModule, CommonModule, InputIconModule, IconFieldModule, FormsModule, InputTextModule, ButtonModule, Dialog, DividerModule, InputGroupModule, InputGroupAddonModule, IftaLabelModule],
  templateUrl: './clientesinfo.component.html',
  styleUrl: './clientesinfo.component.scss'
})
export class ClientesinfoComponent {


  selectedPessoa!: Pessoa;
  visibleDialog: boolean = false;


  pessoastemporario: Pessoa[] = [
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    // ... continua
  ];

  onRowDoubleClick(): void {
    this.visibleDialog = true;
  }

}

interface Pessoa {
  nome: string;
  bairro: string;
  cep: string;
  cpf: string;
  contato: string;
}
