import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { OrdersComponent } from './orders/orders.component';
//import { OrderListComponent } from './order-list/order-list.component';
//import { OrdersService } from "./shared/orders.service";
//import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { QuickTutorialCardComponent } from './quick-tutorial-card/quick-tutorial-card.component';
import { MainCourseCardComponent } from './main-course-card/main-course-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { VideocardComponent } from './videocard/videocard.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseoverviewComponent } from './courseoverview/courseoverview.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { BannerComponent } from './banner/banner.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeroimageComponent } from './heroimage/heroimage.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    QuickTutorialCardComponent,
    MainCourseCardComponent,
    NavbarComponent,
    FooterComponent,
    CertificatesComponent,
    DashboardComponent,
    MywalletComponent,
    VideocardComponent,
    CourseListComponent,
    CourseoverviewComponent,
    CheckoutComponent,
    AboutusComponent,
    SearchbarComponent,
    BannerComponent,
    AuthenticationComponent,
    HeroimageComponent,
    InvoiceComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
