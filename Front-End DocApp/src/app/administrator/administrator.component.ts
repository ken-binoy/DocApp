import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DoctorModel } from './administrator.model';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  formValue!: FormGroup;
  doctorModelObj: DoctorModel = new DoctorModel('', '', '', '', '', '', '');
  doctorData: DoctorModel[] = [];
  showAdd = false;
  showUpdate = false;

  constructor(private formbuilder: FormBuilder, private admin: AdminService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [''],
      name: [''],
      specialization: [''],
      degree: [''],
      state: [''],
      city: [''],
      password: ['']
    });
    this.getAllDoctorDetails();
  }

  clickAddDoctor() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postDoctorDetails() {
    this.doctorModelObj.id = this.formValue.value.id;
    this.doctorModelObj.name = this.formValue.value.name;
    this.doctorModelObj.specialization = this.formValue.value.specialization;
    this.doctorModelObj.degree = this.formValue.value.degree;
    this.doctorModelObj.state = this.formValue.value.state;
    this.doctorModelObj.city = this.formValue.value.city;
    this.doctorModelObj.password = this.formValue.value.password;

    this.admin.postDoctor(this.doctorModelObj).subscribe(
      (res) => {
        console.log(res);
        this.getAllDoctorDetails();
      },
      (error) => {
        console.log('There is an error', error);
      }
    );
  }

  getAllDoctorDetails() {
    this.admin.getDoctors().subscribe((res) => {
      console.log(res);
      this.doctorData = res;
    });
  }

  deleteDoctor(row: DoctorModel) {
    this.admin.deleteDoctor(row.id).subscribe(
      () => {
        alert('Doctor data deleted');
        this.getAllDoctorDetails();
      },
      (error) => {
        console.error('Error deleting doctor:', error);
      }
    );
  }

  onEdit(row: DoctorModel) {
    this.showAdd = false;
    this.showUpdate = true;
    this.doctorModelObj.id = row.id;
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['specialization'].setValue(row.specialization);
    this.formValue.controls['degree'].setValue(row.degree);
    this.formValue.controls['state'].setValue(row.state);
    this.formValue.controls['city'].setValue(row.city);
    this.formValue.controls['password'].setValue(row.password);
  }

  updateDoctorDetails() {
    this.doctorModelObj.id = this.formValue.value.id;
    this.doctorModelObj.name = this.formValue.value.name;
    this.doctorModelObj.specialization = this.formValue.value.specialization;
    this.doctorModelObj.degree = this.formValue.value.degree;
    this.doctorModelObj.state = this.formValue.value.state;
    this.doctorModelObj.city = this.formValue.value.city;
    this.doctorModelObj.password = this.formValue.value.password;

    this.admin.updateDoctor(this.doctorModelObj).subscribe(
      () => {
        alert('Update successful');
        const ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllDoctorDetails();
      },
      (error) => {
        console.error('Error updating doctor:', error);
      }
    );
  }
}
