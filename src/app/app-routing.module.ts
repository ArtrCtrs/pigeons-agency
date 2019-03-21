import { AttackComponent } from './components/attack/attack.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { ExpeditionsComponent } from './components/expeditions/expeditions.component';
import { AviaryComponent } from './components/aviary/aviary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsLoggedOutGuard } from './guards/is-logged-out.guard';
import { MessagesComponent } from './components/messages/messages.component';

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
        component: ExpeditionsComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'aviary',
        component: AviaryComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'leaderboard',
        component: LeaderboardComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'map',
        component: MapComponent,
        canActivate: [IsLoggedInGuard]
    },{
        path: 'upgrades',
        component: UpgradesComponent,
        canActivate: [IsLoggedInGuard]
    },{
        path: 'messages',
        component: MessagesComponent,
        canActivate: [IsLoggedInGuard]
    },
    {
        path: 'attack',
        component: AttackComponent,
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
