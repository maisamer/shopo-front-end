import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LogoutComponent } from './component/logout/logout.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { CartComponent } from './component/cart/cart.component';
import { AuthActivateRouteGuard } from './routeguards/auth.routeguard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'orders', component: OrderListComponent, canActivate: [AuthActivateRouteGuard]},
  { path: 'cart', component: CartComponent},
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
