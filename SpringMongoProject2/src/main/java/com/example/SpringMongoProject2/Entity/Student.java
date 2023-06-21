package com.example.SpringMongoProject2.Entity;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

 
@Document(collection ="students")
public class Student {
 
    @Id
    private String _id;
    @NotEmpty(message = "Name is required")
    @Pattern(regexp = "^[a-zA-Z ]+$", message = "Name should contain only letters and spaces")
    private String studentName;
    
    
    @NotEmpty(message = "Date of Birth is required")
    private String dateOfBirth;
    @NotEmpty(message = "Class is required")
    private String className;
    @NotEmpty(message = "Division is required")
    private String division;
    @NotEmpty(message = "Gender is required")
    private String gender;
    private String regNo;
 
 
    public Student(String _id, String studentName, String dateOfBirth, String className, String division, String gender,String regNo) {
        this._id = _id;
        this.studentName = studentName;
        this.dateOfBirth = dateOfBirth;
        this.className = className;
        this.division = division;
        this.gender = gender;
        this.regNo = regNo;
    }
 
 
    public Student() {
    	
    }
 

	


	public String get_id() {
		return _id;
	}


	public void set_id(String _id) {
		this._id = _id;
	}


	public String getStudentName() {
		return studentName;
	}


	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}


	public String getDateOfBirth() {
		return dateOfBirth;
	}


	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}


	public String getClassName() {
		return className;
	}


	public String getRegNo() {
		return regNo;
	}


	public void setRegNo(String regNo) {
		this.regNo = regNo;
	}


	public void setClassName(String className) {
		this.className = className;
	}


	public String getDivision() {
		return division;
	}


	public void setDivision(String division) {
		this.division = division;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}
	
	 @Override
	    public String toString() {
	        return "Student{" +
	                "_id='" + _id + '\'' +
	                ", studentName='" + studentName + '\'' +
	                ",dateOfBirth ='" + dateOfBirth + '\'' +
	                ", className='" + className + '\'' +
	                ", division='" + division + '\'' +
	                ", gender='" + gender + '\'' +
	                ", regNo='" + regNo + '\'' +
	                '}';
	    }


	


	
		
	}


	


