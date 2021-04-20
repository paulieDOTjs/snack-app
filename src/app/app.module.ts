import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './utils/app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { CurrentComponent } from './pages/current/current.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VotingComponent } from './pages/voting/voting.component';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SnackCardComponent } from './components/snack-card/snack-card.component';
import { SnackTableComponent } from './components/snack-table/snack-table.component';
import { RowComponent } from './components/snack-table/row/row.component';
import { SnackSelectionComponent } from './components/snack-selection/snack-selection.component';
import { ItemComponent } from './components/snack-selection/item/item.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputComponent } from './components/signup-form/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CurrentComponent,
    SignupComponent,
    VotingComponent,
    SnackCardComponent,
    SnackTableComponent,
    RowComponent,
    SnackSelectionComponent,
    ItemComponent,
    SignupFormComponent,
    LogoComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
