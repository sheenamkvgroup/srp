import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './includes/home/home.component';
import { OrderHistoryComponent } from './includes/order-history/order-history.component';
import { LoginComponent } from './includes/login/login.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
