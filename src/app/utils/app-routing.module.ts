import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { CurrentComponent } from '../pages/current/current.component';
import { VotingComponent } from '../pages/voting/voting.component';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  { path: 'current', component: CurrentComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'voting', component: VotingComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
