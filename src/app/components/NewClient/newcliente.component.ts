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
import { Checkbox } from 'primeng/checkbox';


import { MessagesValidFormsComponent } from '../MessagesValidForms/messages-valid-forms.component';
import { ClientinfoComponent } from '../NewClientDetails/clientinfo.component'


@Component({
  selector: 'app-newcliente',
  imports: [DropdownModule, FloatLabel,
    IftaLabelModule, InputGroupAddonModule, InputGroupModule,
    DividerModule, Dialog, ButtonModule, InputTextModule,
    FormsModule, IconFieldModule, InputIconModule, CommonModule,
    ConfirmDialog, ToastModule, ClientinfoComponent, InputMaskModule,
    MessagesValidFormsComponent, Message, Checkbox],
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

  cpf = '';


  isPessoaJuridica: boolean | null = null;
  cpfOuCnpj: string = '';
  cnpjInvalido: boolean | null = null;
  cpfInvalido: boolean | null = null;
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

        this.cpfInvalido = null;
        this.cnpjInvalido = null;


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


  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) {
      return false;
    }


    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * peso--;
    }
    let resto = soma % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;


    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * peso--;
    }
    resto = soma % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    return cpf.charAt(9) === digito1.toString() && cpf.charAt(10) === digito2.toString();
  }

  validarCnpj(cnpj: string): boolean {

    cnpj = cnpj.replace(/[^\d]+/g, '');


    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
      return false;
    }


    let soma = 0;
    let peso = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
      soma += parseInt(cnpj.charAt(i)) * peso[i];
    }
    let resto = soma % 11;
    let digito1 = (resto < 2) ? 0 : 11 - resto;


    soma = 0;
    peso = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
      soma += parseInt(cnpj.charAt(i)) * peso[i];
    }
    resto = soma % 11;
    let digito2 = (resto < 2) ? 0 : 11 - resto;

    return cnpj.charAt(12) === digito1.toString() && cnpj.charAt(13) === digito2.toString();
  }

  onCpfBlur() {
    const cpf = this.cpfOuCnpj?.replace(/\D/g, '');
    this.cpfInvalido = !this.validarCPF(cpf);
    this.cnpjInvalido = null;
  }

  onCnpjBlur() {
    const cnpj = this.cpfOuCnpj?.replace(/\D/g, '');
    this.cnpjInvalido = !this.validarCnpj(cnpj);
    this.cpfInvalido = null;
  }

}
