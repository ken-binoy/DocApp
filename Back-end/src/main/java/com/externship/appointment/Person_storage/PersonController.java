package com.externship.appointment.Person_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/persons")
@CrossOrigin("*")
public class PersonController {

    @Autowired
    private PersonService personService;

    // Create a new person
    @PostMapping
    public ResponseEntity<Person> createPerson(@RequestBody Person person) {
        Person savedPerson = personService.save(person);
        return new ResponseEntity<>(savedPerson, HttpStatus.CREATED);
    }

    // Get a list of all persons
    @GetMapping
    public ResponseEntity<List<Person>> getAllPersons() {
        List<Person> persons = personService.getAllPersons();
        return new ResponseEntity<>(persons, HttpStatus.OK);
    }

    // Get a person by email
    @GetMapping("/{email}")
    public ResponseEntity<Person> getPersonByEmail(@PathVariable String email) {
        Person person = personService.getPersonByEmail(email);
        if (person != null) {
            return new ResponseEntity<>(person, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Update a person by email
    @PutMapping("/{email}")
    public ResponseEntity<Person> updatePersonByEmail(@PathVariable String email, @RequestBody Person updatedPerson) {
        Person person = personService.getPersonByEmail(email);
        if (person != null) {
            updatedPerson.setEmail(email);
            Person savedPerson = personService.save(updatedPerson);
            return new ResponseEntity<>(savedPerson, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a person by email
    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deletePersonByEmail(@PathVariable String email) {
        Person person = personService.getPersonByEmail(email);
        if (person != null) {
            personService.deletePersonByEmail(email);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
