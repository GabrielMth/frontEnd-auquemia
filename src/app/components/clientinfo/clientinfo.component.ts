import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-clientinfo',
  imports: [ButtonModule,Dialog,DividerModule],
  templateUrl: './clientinfo.component.html',
  styleUrl: './clientinfo.component.scss'
})
export class ClientinfoComponent {

  visibleInfoClientDialog: boolean = true;



  visibleInfoDialog() {

  }

}
