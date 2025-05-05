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
import { AutoCompleteModule } from 'primeng/autocomplete';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-newlancamento',
  imports: [Dialog,IftaLabelModule,FloatLabel,InputGroupModule,InputGroupAddonModule,DividerModule,DropdownModule,ButtonModule,AutoCompleteModule,FormsModule,InputTextModule,IconFieldModule,InputIconModule,CommonModule
  ,TableModule,CardModule, TextareaModule],
  templateUrl: './newlancamento.component.html',
  styleUrl: './newlancamento.component.scss'
})
export class NewlancamentoComponent {
  visibleDialog = true;
  pessoaSelecionada: any;


  pessoas: any[] = [
    { nome: 'Maria Silva' },
    { nome: 'João Santos' },
    { nome: 'Carlos Almeida' },
    { nome: 'Ana Paula' },
  ];


  pessoasFiltradas: any[] = [];

  filtrarPessoas(event: any) {
    const query = event.query.toLowerCase();
    this.pessoasFiltradas = this.pessoas.filter(p =>
      p.nome.toLowerCase().includes(query)
    );
  }


}
