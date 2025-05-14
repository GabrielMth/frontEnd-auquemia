import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { NgForm } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { IftaLabelModule } from 'primeng/iftalabel';
import { FloatLabel } from 'primeng/floatlabel';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Message } from 'primeng/message';
import { SharedFormModule } from '../../sharedmodules/shared-form.module';


import { MessagesValidFormsComponent } from '../MessagesValidForms/messages-valid-forms.component';
import { ClientinfoComponent } from '../NewClientDetails/clientinfo.component'
import { CepService } from '../../services/cep-service';


@Component({
  selector: 'app-newcliente',
  imports: [FloatLabel, IftaLabelModule, Dialog, InputIconModule,
    ConfirmDialog, ToastModule, ClientinfoComponent,
    MessagesValidFormsComponent, Message, SharedFormModule],
  templateUrl: './newcliente.component.html',
  styleUrl: './newcliente.component.scss',
  providers: [ConfirmationService, MessageService, CepService]
})
export class NewclienteComponent {

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private http: HttpClient,
    private cepService: CepService
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

    this.isPessoaJuridica = null;
    this.cpfOuCnpj = '';
    this.cpfInvalido = false;
    this.cnpjInvalido = false;
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

        this.cpfInvalido = false;
        this.cnpjInvalido = false;


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
    this.cepService.pesquisarCEP(this.cep).subscribe({
      next: (res) => {
        if (res.erro) {
          this.cepInvalido = true;
          this.bairro = this.cidade = this.estado = this.rua = '';
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
        this.bairro = this.cidade = this.estado = this.rua = '';
      }
    });
  }

  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) return false;

    let soma = 0, peso = 10;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf[i]) * peso--;
    }
    let digito1 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

    soma = 0, peso = 11;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf[i]) * peso--;
    }
    let digito2 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

    return cpf[9] === digito1.toString() && cpf[10] === digito2.toString();
  }

  validarCnpj(cnpj: string): boolean {
    cnpj = cnpj.replace(/\D/g, '');
    if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;

    let peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let soma = peso1.reduce((acc, val, i) => acc + parseInt(cnpj[i]) * val, 0);
    let digito1 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

    soma = peso2.reduce((acc, val, i) => acc + parseInt(cnpj[i]) * val, 0);
    let digito2 = (soma % 11 < 2) ? 0 : 11 - (soma % 11);

    return cnpj[12] === digito1.toString() && cnpj[13] === digito2.toString();
  }

  onCpfCnpjBlur(): void {
    const documentoBruto = this.cpfOuCnpj?.replace(/\D/g, '') || '';

    if (this.isPessoaJuridica) {
      const valido = this.validarCnpj(documentoBruto);
      this.cnpjInvalido = !valido;
      this.cpfInvalido = false;
    } else {
      const valido = this.validarCPF(documentoBruto);
      this.cpfInvalido = !valido;
      this.cnpjInvalido = false;
    }
  }

  onCpfCnpjFocus(): void {
    this.cpfInvalido = false;
    this.cnpjInvalido = false;
  }



}
