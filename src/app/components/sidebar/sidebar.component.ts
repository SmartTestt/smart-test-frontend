import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass, 
    RouterLink, 
    TooltipModule,
    CommonModule, 
    RouterLinkActive,
    AvatarModule,
    AvatarGroupModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public menuItems = [
    {
      route: "dashboard",
      iconClass: 'pi pi-chart-bar',
      tooltip: 'Dashboard'
    },
    {
      route: "activities",
      iconClass: "pi pi-check-square",
      tooltip: "Avaliações"
    },
    {
      route: "class",
      iconClass: "pi pi-user-edit",
      tooltip: "Turmas"
    },
    {
      route: "repository",
      iconClass: "pi pi-folder-open",
      tooltip: "Repositório"
    },

    {
      route: "settings",
      iconClass: 'pi pi-cog',
      tooltip: 'Configurações'
    }
  ];
}
