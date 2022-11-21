
//imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav';
import React, {useState } from "react"
import About from './pages/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Tictac from './pages/Tictac';

function App(props) {

  const [squares, setSquares] = useState
  
  return (
    <div>
      <Header/>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Main/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/Tictac' element={<Tictac/>}/>
      </Routes> 
     </BrowserRouter>
    <Footer/>
    </div>
  );
}
export default App;
