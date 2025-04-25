import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'buttondemo',
    standalone: true,
    templateUrl: './buttontest.component.html',
    imports: [ButtonModule]
})
export class ButtonDemo {}
