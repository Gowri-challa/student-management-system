package com.gowri.studentmanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gowri.studentmanagementsystem.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}