# Doctor Appointment Scheduler

The Doctor Appointment Scheduler is a Spring Boot-based project that provides a web application for scheduling appointments with doctors. It serves as a platform for both patients and doctors to manage appointments efficiently. Below is an elaboration of this project, including details about the controllers, their API endpoints, usage, and sample payloads.

## Functionalities

The project provides the following functionalities:

- **Patient Registration**: Patients can register themselves on the platform by providing their personal information and contact details.

- **Patient Login**: Registered patients can log in to the platform using their credentials.

- **Doctor Registration**: Doctors can also register on the platform by providing their professional information and contact details.

- **Doctor Login**: Registered doctors can log in to the platform to access their accounts.

- **Patient Appointment Management**: Patients can perform several actions related to appointments, including booking, viewing, updating, and canceling appointments.

- **Doctor Appointment Management**: Doctors can access their appointment schedules, view patient details, and make updates or cancel appointments.

## Tools and Technologies

The project is built using the following tools and technologies:

- **Spring Boot**: Spring Boot is used as the framework for building the application, making it easy to create production-ready applications.

- **MVC Architecture**: The project follows the Model-View-Controller (MVC) architectural pattern, ensuring separation of concerns and code organization.

- **Thymeleaf Templating**: Thymeleaf is used for server-side templating, allowing the generation of dynamic HTML pages with embedded server-side code.

- **JPA (Java Persistence API)**: JPA is used for managing the persistence layer, simplifying database operations and allowing the use of object-oriented programming concepts.

- **H2 In-Memory Database**: The project uses an H2 in-memory database for development and testing. H2 is lightweight and doesn't require external configurations.

- **CRUD Operations**: The project involves Create, Read, Update, and Delete (CRUD) operations for managing records, such as patients, doctors, and appointments.

## Requirements

To work with this project, you need the following:

- **Maven**: Maven is a build automation tool used for building and managing Java projects. It's essential for compiling and running the project.

- **Java**: The project is developed in Java, so you need Java installed on your system.

## API Endpoints and Usage

### `AppointmentController`

#### Create a New Appointment

- **Endpoint**: `POST /appointments`
- **Usage**: Create a new appointment by providing an `Appointment` object in the request body.
- **Sample Payload**:
```json
{
  "patientId": 1,
  "doctorId": 1,
  "appointmentDate": "2023-10-25",
  "startTime": "09:00 AM",
  "endTime": "10:00 AM"
}
```

#### Get a List of All Appointments

- **Endpoint**: `GET /appointments`
- **Usage**: Retrieve a list of all appointments.

#### Get an Appointment by ID

- **Endpoint**: `GET /appointments/{appId}`
- **Usage**: Retrieve a specific appointment by its ID.
- **Sample URL**: `/appointments/1`

#### Update an Appointment by ID

- **Endpoint**: `PUT /appointments/{appId}`
- **Usage**: Update an appointment by providing an updated `Appointment` object in the request body.
- **Sample URL**: `/appointments/1`
- **Sample Payload**:
```json
{
  "patientId": 1,
  "doctorId": 2,
  "appointmentDate": "2023-10-25",
  "startTime": "10:00 AM",
  "endTime": "11:00 AM"
}
```

#### Delete an Appointment by ID

- **Endpoint**: `DELETE /appointments/{appId}`
- **Usage**: Delete an appointment by its ID.
- **Sample URL**: `/appointments/1`

### `DoctorController`

#### Create a New Doctor

- **Endpoint**: `POST /doctors`
- **Usage**: Create a new doctor by providing a `Doctor` object in the request body.
- **Sample Payload**:
```json
{
  "name": "Dr. John Smith",
  "specialization": "Cardiologist",
  "contactNumber": "123-456-7890",
  "email": "john.smith@example.com"
}
```

#### Get a List of All Doctors

- **Endpoint**: `GET /doctors`
- **Usage**: Retrieve a list of all doctors.

#### Get a Doctor by ID

- **Endpoint**: `GET /doctors/{id}`
- **Usage**: Retrieve a specific doctor by their ID.
- **Sample URL**: `/doctors/1`

#### Update a Doctor by ID

- **Endpoint**: `PUT /doctors/{id}`
- **Usage**: Update a doctor's information by providing an updated `Doctor` object in the request body.
- **Sample URL**: `/doctors/1`
- **Sample Payload**:
```json
{
  "name": "Dr. John Smith",
  "specialization": "Neurologist",
  "contactNumber": "987-654-3210",
  "email": "john.smith@example.com"
}
```

#### Delete a Doctor by ID

- **Endpoint**: `DELETE /doctors/{id}`
- **Usage**: Delete a doctor by their ID.
- **Sample URL**: `/doctors/1`

## Enjoy using the Doctor Appointment Scheduler!
