import axios from 'axios';
import {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./student.css"

function Student()
{
 
<strong>//Logic
</strong>
  const [studentid, setId] = useState('');
  const [studentName, setStudentName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [className, setClassName] = useState("");
  const [division,setDivision] = useState("");
  const [gender, setGender] = useState("");
  const [students, setUsers] = useState([]);
 
 
 
  
     async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8023/api/v1/student/save",
        {
        studentName: studentName,
        dateOfBirth: dateOfBirth,
        className: className,
        division: division,
          gender: gender
        });
          alert("Student Registation Successfully");
          setId("");
          setStudentName("");
          setDateOfBirth("");
          setClassName("");
          setDivision("");
          setGender("");
          
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
 
  
  
 
 
 
<strong>
</strong>
 
  return (



    <div class="main"> 
       
       <div class="container mt-4 register">
          <form id='register'>
          <h2>Register</h2>
              
                <label>Student name</label>
                <br></br>
                <input placeholder='Student Name' pattern='che' type="text" class="" id="name"
                value={studentName}
                onChange={(event) =>
                  {
                    setStudentName(event.target.value);      
                  }}
                />
              
 
               <br></br>
              
                <label>Date of birth</label>
                <br></br>
                <input placeholder='Date of Birth'  type="date" class="" id="name"
                 value={dateOfBirth}
                  onChange={(event) =>
                    {
                      setDateOfBirth(event.target.value);      
                    }}
                />
              
 
              <br></br>
              
                <label>Class name</label>
                <br></br>
                <select   style={{width:'300px'}}   onChange={e=>setClassName(e.target.value)} >
                 <option value={'l'}>l</option>

                  <option value={'ll'}>ll</option>
                  <option value={'lll'}>lll</option>
                  <option value={'1V'}>1V</option>
                  <option value={'V'}>V</option>
                  <option value={'V1'}>V1</option>
                  <option value={'V11'}>V11</option>
                  <option value={'V111'}>V111</option>
                  <option value={'1X'}>1X</option>
                  <option value={'X'}>x</option>
                  <option value={'X1'}>X1</option>
                  <option value={'x12'}>X12</option>
                  
              
                 </select>
 
                 <br></br>
              
                <label>Division</label>
                <br></br>
                
                 <select   style={{width:'300px'}}   onChange={e=>setDivision(e.target.value)} >
                 <option value={'A'}>A</option>

                  <option value={'B'}>B</option>
                  <option value={'C'}>c</option>
              
                 </select>
    
                 
                 <br></br>
                <label>Gender</label>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="radio" name="gender" class="" id=""
                  value={'male'}
                onChange={(event) =>
                  {
                    setGender(event.target.value);      
                  }}
                />
                <span >Male</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input  type="radio" name="gender" class="" id=""
                  value={'female'}
                onChange={(event) =>
                  {
                    setGender(event.target.value);      
                  }}
                />
                <span >female</span>
                
                <br></br>
                <br></br>
 
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button  class="btn btn-primary"  onClick={save}>Submit</button>
 


                
               
 
             
                
            </form>
          </div>
                <br/>

       </div>
            );
        }
  
  export default Student;