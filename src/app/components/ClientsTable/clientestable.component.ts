import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { Dialog } from 'primeng/dialog';
import { IftaLabelModule } from 'primeng/iftalabel';
import { Tag } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressSpinner } from 'primeng/progressspinner';


import { SharedFormModule } from '../../sharedmodules/shared-form.module';
import { NewclienteComponent } from '../NewClient/newcliente.component'
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

interface Pessoa {
  nome: string;
  bairro: string;
  cep: string;
  cpf: string;
  contato: string;
}

@Component({
  selector: 'app-clientestable',
  imports: [CardModule, TableModule, Dialog, IftaLabelModule, NewclienteComponent,
    Tag, ToastModule, ConfirmPopupModule, SharedFormModule, ProgressSpinner],
  templateUrl: './clientestable.component.html',
  styleUrl: './clientestable.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class ClientesTableComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private clienteService: ClienteService
  ) { }

  status: boolean = true;
  visibleDialogDetails: boolean = false;

  dialogCadastroCliente: boolean = false;


  clientes: Cliente[] = [];
  totalRegistros: number = 0;
  carregando: boolean = false;

  carregarClientesPaginado(event: any): void {
    this.carregando = true;

    const pagina = event.first / event.rows;
    const tamanho = event.rows;

    this.clienteService.consultarPaginado(pagina, tamanho).subscribe({
      next: (res) => {
        this.clientes = res.conteudo;
        this.totalRegistros = res.totalElementos;
        this.carregando = false;
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar clientes' });
        this.carregando = false;
      }
    });
  }

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



