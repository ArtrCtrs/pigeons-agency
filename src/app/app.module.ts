import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AviaryComponent } from './components/aviary/aviary.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { MapComponent } from './components/map/map.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ExpeditionsComponent } from './components/expeditions/expeditions.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MessagesComponent } from './components/messages/messages.component';

import { faMap } from '@fortawesome/pro-regular-svg-icons';
import { faScroll } from '@fortawesome/pro-regular-svg-icons';
import { faFlask } from '@fortawesome/pro-regular-svg-icons';
import { faWarehouse } from '@fortawesome/pro-regular-svg-icons';
import { faHome } from '@fortawesome/pro-regular-svg-icons';
import { faFeatherAlt } from '@fortawesome/pro-regular-svg-icons';
import { faTrophy } from '@fortawesome/pro-regular-svg-icons';
import { faTrophyAlt } from '@fortawesome/pro-regular-svg-icons';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { faSeedling } from '@fortawesome/pro-regular-svg-icons';
import { faPoop } from '@fortawesome/pro-regular-svg-icons';
import { faCrow } from '@fortawesome/pro-regular-svg-icons';
import { faPennant } from '@fortawesome/pro-regular-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/pro-regular-svg-icons';
import { faExclamationTriangle } from '@fortawesome/pro-regular-svg-icons';


library.add(faMap);
library.add(faScroll);
library.add(faFlask);
library.add(faWarehouse);
library.add(faHome);
library.add(faFeatherAlt);
library.add(faTrophy);
library.add(faTrophyAlt);
library.add(faSearch);
library.add(faSeedling);
library.add(faPoop);
library.add(faCrow);
library.add(faPennant);
library.add(faAngleDoubleUp);
library.add(faExclamationTriangle);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        MenuComponent,
        AchievementsComponent,
        AviaryComponent,
        MapComponent,
        PageNotFoundComponent,
        ExpeditionsComponent,
        UpgradesComponent,
        LeaderboardComponent,
        MessagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
