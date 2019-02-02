import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExpeditionsComponent } from './components/expeditions/expeditions.component';
import { AviaryComponent } from './components/aviary/aviary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { IsLoggedOutGuard } from './shared/guards/is-logged-out.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [IsLoggedOutGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [IsLoggedOutGuard]
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'achievements',
        component: AchievementsComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'expeditions',
        component: ExpeditionsComponent
    },
    {
        path: 'aviary',
        component: AviaryComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'map',
        component: MapComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
