import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { HomeComponent } from './includes/home/home.component';
import { OrderHistoryComponent } from './includes/order-history/order-history.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { InsertService } from './services/insert.service';
import { LoginComponent } from './includes/login/login.component';
import { ProfileComponent } from './includes/profile/profile.component';
import { ChangepasswordComponent } from './includes/changepassword/changepassword.component';
import { OrderdetailComponent } from './includes/orderdetail/orderdetail.component';
import { LoginService } from './services/login.service';
import { ResetpasswordComponent } from './includes/resetpassword/resetpassword.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderHistoryComponent,
    LoginComponent,
    ProfileComponent,
    ChangepasswordComponent,
    OrderdetailComponent,
    ResetpasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    CollapseModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    NgxSelectModule
  ],
  providers: [InsertService,BsDatepickerConfig,LoginService],
  bootstrap: [AppComponent] 
})
export class AppModule { }