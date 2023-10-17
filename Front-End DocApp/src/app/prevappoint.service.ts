import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment.model'; // Adjust the path as needed


@Injectable({
  providedIn: 'root'
})
export class PrevappointService { // Updated service class name
  private baseUrl = 'http://localhost:8080/appointments'; // Update to match your Spring Boot endpoint

  constructor(private httpClient: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(this.baseUrl);
  }
}
