package com.gowri.studentmanagementsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.gowri.studentmanagementsystem.entity.Student;
import com.gowri.studentmanagementsystem.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService service;

    // CREATE
    @PostMapping("/save")
    public Student saveStudent(@RequestBody Student student) {
        return service.saveStudent(student);
    }

    // READ ALL
    @GetMapping("/all")
    public List<Student> getAllStudents() {
        return service.getAllStudents();
    }

    // READ BY ID
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable Long id) {
        return service.getStudentById(id);
    }

    // UPDATE
    @PutMapping("/update/{id}")
    public Student updateStudent(
            @PathVariable Long id,
            @RequestBody Student student) {

        return service.updateStudent(id, student);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable Long id) {
        return service.deleteStudent(id);
    }
}