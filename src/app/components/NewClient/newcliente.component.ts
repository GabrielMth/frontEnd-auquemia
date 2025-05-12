import { Component, Input, Output, EventEmitter } from '@angular/core';
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
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { MessagesValidFormsComponent } from '../MessagesValidForms/messages-valid-forms.component';



import { ClientinfoComponent } from '../NewClientDetails/clientinfo.component'


@Component({
  selector: 'app-newcliente',
  imports: [DropdownModule, FloatLabel,
    IftaLabelModule, InputGroupAddonModule, InputGroupModule,
    DividerModule, Dialog, ButtonModule, InputTextModule,
    FormsModule, IconFieldModule, InputIconModule, CommonModule,
    ConfirmDialog, ToastModule, ClientinfoComponent, InputMaskModule,
    MessagesValidFormsComponent],
  templateUrl: './newcliente.component.html',
  styleUrl: './newcliente.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class NewclienteComponent {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  @Input() visibleDialogNewClient: boolean = false;
  @Output() closedCadastro = new EventEmitter<void>();

  visibleDialogDetailsClient: boolean = false;


  status: boolean = true;
  statusOptions: [] = [];


  fecharDialogCadastro() {
    this.closedCadastro.emit();
  }

  fecharDialogDetails() {
    this.visibleDialogDetailsClient = false;
  }


  confirmarCadastroPessoa() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja cadastrar este cliente?',
      header: 'Confirmar cadastro',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Cadastro Confirmado',
          detail: 'O cliente foi cadastrado com sucesso.',
        });

        this.visibleDialogDetailsClient = true;
        this.visibleDialogNewClient = false;

      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Ação Cancelada',
          detail: 'O cadastro não foi realizado.'
        });
      }
    });
  }

}
