import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DoctorModel } from '../administrator/administrator.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8080/doctors'; // Adjust the URL accordingly

  constructor(private http: HttpClient) { }

  // Create a new doctor
  postDoctor(data: DoctorModel): Observable<DoctorModel> {
    return this.http.post<DoctorModel>(`${this.apiUrl}`, data);
  }

  // Get a list of all doctors
  getDoctors(): Observable<DoctorModel[]> {
    return this.http.get<DoctorModel[]>(`${this.apiUrl}`);
  }

  // Update a doctor by email
  updateDoctor(data: DoctorModel): Observable<DoctorModel> {
    return this.http.put<DoctorModel>(`${this.apiUrl}/${data.id}`, data);
  }

  // Delete a doctor by email
  deleteDoctor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getDoctorNames(): Observable<string[]> {
    const url = `${this.apiUrl}/names`; // Replace with the actual endpoint to get doctor names
    return this.http.get<string[]>(url);
  }

  getDoctorSpecs(): Observable<string[]> {
    const url = `${this.apiUrl}/specs`; // Replace with the actual endpoint to get doctor names
    return this.http.get<string[]>(url);
  }

  
}
