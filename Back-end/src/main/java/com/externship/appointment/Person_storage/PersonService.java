package com.externship.appointment.Person_storage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class PersonService {

    @Autowired
    private PersonRepository personRepository;

    public Person save(Person person) {
        return personRepository.save(person);
    }

    public List<Person> getAllPersons() {
        Iterable<Person> personsIterable = personRepository.findAll();
        return StreamSupport.stream(personsIterable.spliterator(), false)
                            .collect(Collectors.toList());
    }

    public Person getPersonByEmail(String email) {
        return personRepository.findById(email).orElse(null);
    }

    public void deletePersonByEmail(String email) {
        personRepository.deleteById(email);
    }
}
