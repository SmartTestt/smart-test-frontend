import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { publicGuard } from './security/guards/public.guard';
import { HomeComponent } from './pages/home/home.component';
import { privateGuard } from './security/guards/private.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [publicGuard] },

    {
        path: "home",
        pathMatch: "full",
        component: HomeComponent,
        canActivateChild: [privateGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redireciona para dashboard por padrão
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
