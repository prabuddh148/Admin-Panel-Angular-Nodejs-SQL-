import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
];
