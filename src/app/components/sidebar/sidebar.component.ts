import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgClass, RouterLink, TooltipModule,CommonModule, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  public menuItems = [
    {
      route: "/dashboard",
      iconClass: 'pi pi-chart-bar',
      tooltip: 'Dashboard'
    },
    {
      route: "/dashboard",
      iconClass: 'pi pi-calendar',
      tooltip: 'Agenda'
    },
    {
      route: "/settings",
      iconClass: 'pi pi-cog',
      tooltip: 'Configurações'
    }
  ];
}
