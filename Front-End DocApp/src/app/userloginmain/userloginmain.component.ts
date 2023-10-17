import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userloginmain',
  templateUrl: './userloginmain.component.html',
  styleUrls: ['./userloginmain.component.css']
})
export class UserloginmainComponent {
  constructor(private router: Router) { }

  bookAppointment(){
    this.router.navigate(['/appointment']);
  }
  prevAppointment(){
    this.router.navigate(['/prevappoint'])
  }


}
