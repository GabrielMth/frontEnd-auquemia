import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-clientinfo',
  imports: [ButtonModule,Dialog,DividerModule],
  templateUrl: './clientinfo.component.html',
  styleUrl: './clientinfo.component.scss',
})
export class ClientinfoComponent{

  @Input() visibleInfoClientDialog: boolean = false;
  @Input() cliente!: Cliente;
  @Output() closedDialogDetails = new EventEmitter<void>();

  fecharDetails() {
    this.closedDialogDetails.emit();
  }
}
