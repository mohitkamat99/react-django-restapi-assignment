import "../Home.css";
//import Display from "./studentsdata";
//import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery-validation/dist/jquery.validate.js"
import "jquery-validation/dist/additional-methods.js"
import $ from "jquery"

import {useState, useEffect} from "react";
import axios from "axios";

function Home()
{

  //storing the state of the fields
  const[studentData, setStudentData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    college_name: "",
    course: "",
    phone:""
  })

//posting the data using postData()
  function postData(event)
  {
    //jquery validation
    if (!$('#stud').valid()) {
      return false;
    } 
    else {
      axios({
      method:"POST",
      url:"/api/students/",
       data:{
            first_name: studentData.first_name,
            last_name: studentData.last_name,
            email: studentData.email,
            college_name: studentData.college_name,
            course: studentData.course,
            phone:studentData.phone
           }
    })
    .then((response)=>{
     console.log(response)
     setStudentData({
         first_name: "",
         last_name: "",
         email: "",
         college_name: "",
         course: "",
         phone:""
     })
    })
    .catch((error=>{
      console.log(error)
    }))
    }
  }

  //assigning values to the fields
function handleChange(evt) {
  const value = evt.target.value;
  setStudentData({
    ...studentData,
    [evt.target.name]: value
  });
}

 
  return (
    //student form
    <div className="container">
      <h2>Student Form</h2>
        <form id="stud">
            <label for="fname">First Name</label>
           <input className="input-text" type="text" onChange={handleChange} name="first_name" id="first_name" value={studentData.first_name} required></input><br/>
           <label for="lname">Last Name</label>
           <input className="input-text" type="text" onChange={handleChange} name="last_name" id="last_name" value={studentData.last_name} required></input><br/>
           <label for="semail">Email</label>
           <input className="input-text" type="email" onChange={handleChange} name="email" id="email" value={studentData.email} required></input><br/>
           <label for="scollege">College Name</label>
           <input className="input-text" type="text" onChange={handleChange} name="college_name" id="college_name" value={studentData.college_name} required></input><br/>
           <label for="course">Course</label>
           <select className="dropdown-course" onChange={handleChange} value={studentData.course} name="course" id="course" required> <br/>
              <option value="MCA">MCA</option>
              <option value="MSc">MSc</option>
              <option value="MCom">MCom</option>
              <option value="MTech">MTech</option>
              <option value="MPharm">MPharm</option>
           </select>
           <label for="phone">Phone Number</label>
            <input className="input-text" type="text" pattern="[0-9]*" onChange={handleChange} name="phone" id="phone" value={studentData.phone} maxLength="10" minLength="10" required></input><br/>
            <button name="submit" type="button" onClick={postData}>Submit</button>  
        </form>    
    </div>
  );
}



export default Home;