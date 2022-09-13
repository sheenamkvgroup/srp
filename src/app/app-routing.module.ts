import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './includes/home/home.component';
import { OrderHistoryComponent } from './includes/order-history/order-history.component';
import { LoginComponent } from './includes/login/login.component';
import { ProfileComponent } from './includes/profile/profile.component';
import { ChangepasswordComponent } from './includes/changepassword/changepassword.component';
import { OrderdetailComponent } from './includes/orderdetail/orderdetail.component';
import { ResetPasswordService } from './services/reset-password.service';
import { ResetpasswordComponent } from './includes/resetpassword/resetpassword.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'order-history',
    component: OrderHistoryComponent
  },

  {
    path:'login',
    component: LoginComponent
  },

  {
    path:'profile',
    component: ProfileComponent
  },

  {
    path:'changepassword',
    component: ChangepasswordComponent
  },

  {
    path:'orderdetail/:id',
    component: OrderdetailComponent
  },
  {
    path:'resetpassword',
    component: ResetpasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
