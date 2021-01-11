import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { MywalletComponent } from './mywallet/mywallet.component';
import { VideocardComponent } from './videocard/videocard.component';
const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'certificates', component: CertificatesComponent},
  {path: 'mywallet', component: MywalletComponent},
  {path: 'course', component:  VideocardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
