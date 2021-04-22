import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CurrentComponent } from './pages/current/current.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VotingComponent } from './pages/voting/voting.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SnackCardComponent } from './components/snack-card/snack-card.component';
import { SnackSelectionComponent } from './components/snack-selection/snack-selection.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputComponent } from './components/signup-form/input/input.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalComponentComponent } from './components/global-component/global-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CurrentComponent,
    SignupComponent,
    VotingComponent,
    SnackCardComponent,
    SnackSelectionComponent,
    SignupFormComponent,
    LogoComponent,
    InputComponent,
    ErrorMessageComponent,
    FooterComponent,
    GlobalComponentComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
