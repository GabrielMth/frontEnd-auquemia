import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { TieredMenu } from 'primeng/tieredmenu';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'navbar',
  imports: [MenubarModule, ButtonModule, AvatarModule, ToastModule, CommonModule,TieredMenu,TagModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  itemsLogout: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-users'
      },
      {
        label: 'Relatórios',
        icon: 'pi pi-print',
        items: [
          {
            label: 'Components',
            icon: 'pi pi-bolt'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil'
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette'
              }
            ]
          }
        ]
      },
      {
        label: 'Contas á Receber',
        icon: 'pi pi-money-bill'
      },
    ]


    this.itemsLogout = [
      {
        label: 'Trocar senha',
        icon: 'pi pi-cog'
      },
      {
        label: 'Deslogar',
        icon: 'pi pi-sign-out'
      }
    ];
  }



}
