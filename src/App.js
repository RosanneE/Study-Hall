
//imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav';
import React, {useState } from "react"
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';

function App(props) {

  return (
    <div>
      <Header/>
      {/* <Main/> */}
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Main/>} />
        <Route path='/about' element={<About/>}/>
      </Routes> 
     </BrowserRouter>
    <Footer/>
    </div>
  );
}
export default App;
