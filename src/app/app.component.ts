import { Component, OnInit } from '@angular/core';
import { LancamentoComponent } from './components/input-text-float/input-text-float.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [LancamentoComponent],
})
export class AppComponent {

}
