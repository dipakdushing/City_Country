import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import {Routes , Route} from "react-router-dom";
import Home from './components/Home';
import AddCity from './components/AddCity';
import EditCity from './components/EditCity';

function App() {
 

  return (
    <div className="App">
      {/* <h1>Population</h1>
      <CityList>
      </CityList> */}
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/add-city" element={<AddCity/>}></Route>
        <Route  path="/add-country/:id" element={<EditCity/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
