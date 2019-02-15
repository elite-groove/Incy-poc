import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule, onAuthRequired} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {NavigationComponent} from './globals/navigation/navigation.component';
import {HomeComponent} from './views/home/home.component';
import {ListComponent} from './views/results/list/list.component';
import {MapComponent} from './views/results/map/map.component';
import {WelcomeComponent} from './views/welcome/welcome.component';
import {RequestCardComponent} from './components/request-card/request-card.component';
import {MessagesCardComponent} from './components/messages-card/messages-card.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule,
         MatAutocompleteModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ResultsComponent } from './views/results/results.component';
import { CardsComponent } from './views/results/cards/cards.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { AuthComponent } from './views/auth/auth.component';
import { FiltersComponent } from './components/filters/filters.component';

// Okta SSO
import { OktaAuthModule } from '@okta/okta-angular';
import {environment} from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        ListComponent,
        MapComponent,
        WelcomeComponent,
        RequestCardComponent,
        MessagesCardComponent,
        SearchBarComponent,
        ResultsComponent,
        CardsComponent,
        LoginComponent,
        AuthComponent,
        FiltersComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatTableModule,
        OktaAuthModule.initAuth({
            issuer: environment.okta.issuer,
            clientId: environment.okta.clientId,
            redirectUri: environment.okta.redirectUri
        })
    ],
    exports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatTableModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
