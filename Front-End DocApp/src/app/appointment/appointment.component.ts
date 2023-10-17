import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../appointment.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointmentForm!: FormGroup;
  appointments: Appointment[] = [];
  doctorNames: string[] = [];
  doctorSpecs: string[] = [];

  constructor(
     private formBuilder: FormBuilder,
     private appointmentService: AppointmentService, 
     private adminService: AdminService
     ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadDoctorNames();
    this.loadDoctorSpecs();
    this.loadAppointments();
  }

  initializeForm() {
    this.appointmentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      docId: ['', Validators.required],
      docName: ['', Validators.required],
      docSpecial: ['', Validators.required],
      status: ['Scheduled', Validators.required], // Default value for status
      date: [this.getFormattedDate(), Validators.required], // Default value for date
    });
  }

  loadAppointments() {
    this.appointmentService.getAllAppointments().subscribe(
      (data: Appointment[]) => {
        this.appointments = data;
      },
      error => {
        console.error('Error loading appointments:', error);
      }
    );
  }

  loadDoctorNames() {
    // Use the adminService to fetch the list of doctor names
    this.adminService.getDoctorNames().subscribe(
      (data: string[]) => {
        this.doctorNames = data;
      },
      (error) => {
        console.error('Error loading doctor names:', error);
      }
    );
  }

  loadDoctorSpecs() {
    // Use the adminService to fetch the list of doctor names
    this.adminService.getDoctorSpecs().subscribe(
      (data: string[]) => {
        this.doctorSpecs = data;
      },
      (error) => {
        console.error('Error loading doctor Specializations:', error);
      }
    );
  }

  createAppointment() {
    if (this.appointmentForm.valid) {
      const newAppointmentPayload = this.appointmentForm.value;

      this.appointmentService.createAppointment(newAppointmentPayload).subscribe(
        (data: Appointment) => {
          this.appointments.push(data);
          this.appointmentForm.reset();
        },
        error => {
          console.error('Error creating appointment:', error);
        }
      );
    }
  }

  getFormattedDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hour}:${minute}:00Z`;
  }
}
