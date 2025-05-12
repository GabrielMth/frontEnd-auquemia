import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule, NgForm } from '@angular/forms';
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
import { Message } from 'primeng/message';


import { MessagesValidFormsComponent } from '../MessagesValidForms/messages-valid-forms.component';
import { ClientinfoComponent } from '../NewClientDetails/clientinfo.component'


@Component({
  selector: 'app-newcliente',
  imports: [DropdownModule, FloatLabel,
    IftaLabelModule, InputGroupAddonModule, InputGroupModule,
    DividerModule, Dialog, ButtonModule, InputTextModule,
    FormsModule, IconFieldModule, InputIconModule, CommonModule,
    ConfirmDialog, ToastModule, ClientinfoComponent, InputMaskModule,
    MessagesValidFormsComponent,Message],
  templateUrl: './newcliente.component.html',
  styleUrl: './newcliente.component.scss',
  providers: [ConfirmationService, MessageService]
})
export class NewclienteComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private http: HttpClient
  ) { }

  @ViewChild('form') form!: NgForm;
  @Input() visibleDialogNewClient: boolean = false;
  @Output() closedCadastro = new EventEmitter<void>();

  visibleDialogDetailsClient: boolean = false;

  status: boolean = true;
  statusOptions: [] = [];

  cepInvalido: boolean | null = null;
  cep: string = '';
  bairro = '';
  cidade = '';
  estado = '';
  rua = '';


  fecharDialogCadastro(form: any) {
    this.closedCadastro.emit();
    form.reset();
    form.resetForm();
  }

  fecharDialogDetails() {
    this.visibleDialogDetailsClient = false;

  }


  confirmarCadastroPessoa(form: any) {
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

        form.reset();
        form.resetForm();

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

  onCepBlur() {

    const cepBruto: string = this.cep;

    if (cepBruto) {

      this.http.get<any>(`https://viacep.com.br/ws/${cepBruto}/json/`).subscribe({
        next: (res) => {
          console.log("Resposta do ViaCEP: ", res);
          if (res.erro) {
            this.cepInvalido = true;
            this.limparEndereco();
          } else {
            this.cepInvalido = false;
            this.bairro = res.bairro;
            this.cidade = res.localidade;
            this.estado = res.uf;
            this.rua = res.logradouro;
          }
        },
        error: () => {
          this.cepInvalido = true;
          this.limparEndereco();
        }
      });
    }
  }


  limparEndereco() {
    this.bairro = '';
    this.cidade = '';
    this.estado = '';
    this.rua = '';
  }

}
