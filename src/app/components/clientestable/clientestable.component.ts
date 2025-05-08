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
import { FloatLabel } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-clientesinfo',
  imports: [CardModule, TableModule, CommonModule, InputIconModule, IconFieldModule, FormsModule,
  InputTextModule, ButtonModule, Dialog, DividerModule, InputGroupModule, InputGroupAddonModule,
  IftaLabelModule, FloatLabel, DropdownModule],
  templateUrl: './clientestable.component.html',
  styleUrl: './clientestable.component.scss',
})
export class ClientesTableComponent {

  status: boolean = true;
  visibleDialog: boolean = false;


  pessoastemporario: Pessoa[] = [
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Gabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Labriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    { nome: 'Kabriel', bairro: 'Nova-Assis', cep: '19803-450', cpf: '511.948.098-55', contato: '(18)997287085' },
    // ... continua
  ];

  onRowDoubleClick(): void {
    this.visibleDialog = true;
  }


  statusOptions = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ];

}


interface Pessoa {
  nome: string;
  bairro: string;
  cep: string;
  cpf: string;
  contato: string;
}
