export class DoctorModel {
    id : string;
    name: string;
    specialization: string;
    degree: string;
    state: string;
    city: string;
    password: string;
  
    constructor(
      id : string,
      name: string,
      specialization: string,
      degree: string,
      state: string,
      city: string,
      password: string
    ) {
      this.id = id;
      this.name = name;
      this.specialization = specialization;
      this.degree = degree;
      this.state = state;
      this.city = city;
      this.password = password;
    }
  }
  