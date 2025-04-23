// export é para enxergar a classe apartir de outro arquivo typeScript 
// Decorator é @Component

import { Component } from "@angular/core";
//template literal somente quando é poucas linhas
//se não vamos ter que usar o TEMPLATEURL que é melhor e boa prática.
@Component({
    selector: 'aqm-hello',
    standalone: false, 
    template: `                           
        <h2>
            Hello {{nome}}
        </h2>
    `
})
export class HelloComponent {
    nome = 'Gabriel';
}