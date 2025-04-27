import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [MenubarModule,ButtonModule,AvatarModule,Menu,ToastModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
    items: MenuItem[] | undefined;
    itemsLogout: MenuItem[] | undefined;
    userMenuVisible: boolean = false;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Clientes',
                icon: 'pi pi-star'
            },
            {
                label: 'Relatórios',
                icon: 'pi pi-search',
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
                icon: 'pi pi-envelope'
            },
        ]


        this.itemsLogout = [
          {
              label: 'Documents',
              items: [
                  {
                      label: 'New',
                      icon: 'pi pi-plus'
                  },
                  {
                      label: 'Search',
                      icon: 'pi pi-search'
                  }
              ]
          },
          {
              label: 'Profile',
              items: [
                  {
                      label: 'Settings',
                      icon: 'pi pi-cog'
                  },
                  {
                      label: 'Logout',
                      icon: 'pi pi-sign-out'
                  }
              ]
          }
      ];
  }




  toggleUserMenu() {
    this.userMenuVisible = !this.userMenuVisible;
  }







}
