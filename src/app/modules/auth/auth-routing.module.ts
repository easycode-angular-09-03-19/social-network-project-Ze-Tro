import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { AuthGuard } from './services/auth-guard.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: 'signup', component: SignupComponent},
  { path: '', redirectTo: '/auth/login'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthRoutingModule { }