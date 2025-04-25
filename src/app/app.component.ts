import { Component } from '@angular/core';
import { ButtonDemo } from './components/buttontest/buttontest.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ButtonDemo],
})
export class AppComponent {
}
