import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Student from './pages/Student';
import { useState } from 'react';
import Favourite from './pages/Favourite';

function App() {

   const [studentlist,setstudentlist] = useState([{id:1,name:"Akilan",favourite:false},{id:2,name:"Vijay",favourite:false},{id:3,name:"Karthick",favourite:false},{id:4,name:"Judson",favourite:false},{id:5,name:"Vinay",favourite:false}])

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Student studentlist={studentlist} setstudentlist={setstudentlist}/>}>Student Page</Route>
    <Route path="/favourite" element={<Favourite studentlist={studentlist} setstudentlist={setstudentlist}/>}>Favourites List</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;