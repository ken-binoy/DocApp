import { Component, OnInit } from '@angular/core';
import { PrevappointService } from '../prevappoint.service'; // Updated service import
import { Appointment } from '../appointment.model'; // Adjust the path as needed


@Component({
  selector: 'app-prevappoint',
  templateUrl: './prevappoint.component.html',
  styleUrls: ['./prevappoint.component.css']
})
export class PrevappointComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private prevappointService: PrevappointService) { } // Updated service injection

  ngOnInit(): void {
    this.prevappointService.getAppointments().subscribe((data) => { // Updated service usage
      this.appointments = data;
    });
  }
}
