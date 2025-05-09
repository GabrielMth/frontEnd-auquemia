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
import { Tag } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputMaskModule } from 'primeng/inputmask';


import { NewclienteComponent } from '../NewClient/newcliente.component'

interface Pessoa {
  nome: string;
  bairro: string;
  cep: string;
  cpf: string;
  contato: string;
}

@Component({
  selector: 'app-clientestable',
  imports: [CardModule, TableModule, CommonModule, InputIconModule,
    IconFieldModule, FormsModule, InputTextModule, ButtonModule,
    Dialog, DividerModule, InputGroupModule, InputGroupAddonModule,
    IftaLabelModule, FloatLabel, DropdownModule, NewclienteComponent,
    Tag, ToastModule, ConfirmPopupModule, InputMaskModule],
  templateUrl: './clientestable.component.html',
  styleUrl: './clientestable.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ClientesTableComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  status: boolean = true;
  visibleDialogDetails: boolean = false;

  dialogCadastroCliente: boolean = false;


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
    this.visibleDialogDetails = true;
  }


  statusOptions = [
    { label: 'Ativo', value: true },
    { label: 'Inativo', value: false }
  ];


  abrirCadastroCliente() {
    this.dialogCadastroCliente = true;
  }

  fecharCadastroCliente() {
    this.dialogCadastroCliente = false;
  }

  confirm1(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Você tem certeza que deseja realizar esse procedimento ?',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Sim'
      },
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Informações Cliente', detail: 'Cliente atualizado com sucesso', life: 3000 });
        this.visibleDialogDetails = false
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Informações Cliente', detail: 'Cliente não atualizado', life: 3000 });
      }
    });
  }

}



