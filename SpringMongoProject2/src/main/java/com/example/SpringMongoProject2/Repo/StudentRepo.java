package com.example.SpringMongoProject2.Repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringMongoProject2.Entity.Student;
 
@Repository
public interface StudentRepo extends MongoRepository<Student,String> {
}
