import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { publicGuard } from './security/guards/public.guard';
import { HomeComponent } from './pages/home/home.component';
import { privateGuard } from './security/guards/private.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { ClassComponent } from './pages/class/class.component';
import { ActivitiesComponent } from './pages/activities/activities.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [publicGuard] },

    {
        path: "home",
        component: HomeComponent,
        canActivateChild: [privateGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
            { path: 'dashboard', component: DashboardComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'repository', component: RepositoryComponent },
            { path: 'class', component: ClassComponent },
            { path: 'activities', component: ActivitiesComponent }
        ]
    },
    
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
