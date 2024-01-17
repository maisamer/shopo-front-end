import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  //{ path: 'notices', component: NoticesComponent},
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthActivateRouteGuard]},
  //{ path: 'logout', component: LogoutComponent},
 // { path: 'myAccount', component: AccountComponent, canActivate: [AuthActivateRouteGuard]},
  //{ path: 'myBalance', component: BalanceComponent, canActivate: [AuthActivateRouteGuard]},
 // { path: 'myLoans', component: LoansComponent, canActivate: [AuthActivateRouteGuard]},
  //{ path: 'myCards', component: CardsComponent, canActivate: [AuthActivateRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
