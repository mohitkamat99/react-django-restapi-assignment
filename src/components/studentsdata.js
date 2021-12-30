import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css"
import {useState, useEffect} from "react";
import axios from "axios";

function Display()
{
  //storing the state
  const [students , setStudents] = useState(null)

  //loading the getData() at form load
  useEffect(()=>{
    getData()
  },[])


  //getting data from the database using axios
  function getData() {
  axios({
      method: "GET",
      url:"/api/students/",
    }).then((response)=>{
      const data = response.data
      setStudents(data)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
        }
    })}

  return(
      <div className="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">College</th>
      <th scope="col">Course</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
    {/* displaying data */}
    {students && students.map(stud=>
    <tr>
      <th scope="row">{stud.id}</th>
      <td>{stud.first_name}</td>
      <td>{stud.last_name}</td>
      <td>{stud.email}</td>
      <td>{stud.college_name}</td>
      <td>{stud.course}</td>
      <td>{stud.phone}</td>
    </tr>
    )
}
  </tbody>
</table>
      </div>
  );
}

export default Display;