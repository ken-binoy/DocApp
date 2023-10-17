import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:8080/appointments'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Retrieve a list of all appointments
  getAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }

  // Retrieve an appointment by its ID
  getAppointmentById(appId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${appId}`);
  }

  // Create a new appointment
  createAppointment(appointmentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, appointmentData);
  }

  // Update an appointment by its ID
  updateAppointment(appId: string, updatedAppointmentData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${appId}`, updatedAppointmentData);
  }

  // Delete an appointment by its ID
  deleteAppointment(appId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${appId}`);
  }
}
