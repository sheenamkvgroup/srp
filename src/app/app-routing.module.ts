import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './includes/home/home.component';
import { OrderHistoryComponent } from './includes/order-history/order-history.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path:'order-history',
    component: OrderHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
