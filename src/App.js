import React from "react";
import {Routes, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Display from './components/studentsdata';
import Home from './components/Home';

function App() {
  return (
    // navigation menu
     <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to={"/list"} className="nav-link">
                Student List
              </Link>
            </li>
            <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                Student Add
              </Link>
            </li>
          </div>
        </nav>

        <div>
          {/* routing links to the pages */}
          <Routes>
            <Route exact path="/add" element={<Home/>} />
            <Route exact path="/list" element={<Display/>} />
            <Route exact path="/" element={<Home/>}></Route> 
          </Routes>
        </div>
      </div>

     
  );
}

export default App;
