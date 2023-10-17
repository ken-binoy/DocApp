import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReviewComponent } from './review/review.component';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserloginmainComponent } from './userloginmain/userloginmain.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';
import { BookingComponent } from './booking/booking.component';
import { PrevappointComponent } from './prevappoint/prevappoint.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'administrator',component:AdministratorComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'user-login',component:UserloginComponent},
  {path:'userloginmain',component:UserloginmainComponent},
  {path:'user-signup',component:UsersignupComponent},
  {path:'review/:doctorId',component:ReviewComponent},
  {path:'viewreview',component:ViewreviewComponent},
  {path:'booking', component:BookingComponent},
  {path:'userloginmain', component:UserloginmainComponent},
  {path:'prevappoint',component:PrevappointComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
