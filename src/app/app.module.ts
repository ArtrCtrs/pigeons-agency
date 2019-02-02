import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AviaryComponent } from './components/aviary/aviary.component';
import { AchievementsComponent } from './components/achievements/achievements.component';

import { faMap } from '@fortawesome/pro-regular-svg-icons';
import { faScroll } from '@fortawesome/pro-regular-svg-icons';
import { faFlask } from '@fortawesome/pro-regular-svg-icons';
import { faWarehouse } from '@fortawesome/pro-regular-svg-icons';
import { faHome } from '@fortawesome/pro-regular-svg-icons';
import { faFeatherAlt } from '@fortawesome/pro-regular-svg-icons';
import { faTrophy } from '@fortawesome/pro-regular-svg-icons';
import { faTrophyAlt } from '@fortawesome/pro-regular-svg-icons';
import { faSearch } from '@fortawesome/pro-regular-svg-icons';
import { MapComponent } from './components/map/map.component';

library.add(faMap);
library.add(faScroll);
library.add(faFlask);
library.add(faWarehouse);
library.add(faHome);
library.add(faFeatherAlt);
library.add(faTrophy);
library.add(faTrophyAlt);
library.add(faSearch);

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        MenuComponent,
        AchievementsComponent,
        AviaryComponent,
        MapComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
