import { GlobalStyle } from "./styles/global";
import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Home} from "./pages/Home";
import {Outro} from "./pages/Home";

import { Navbar}from './components/Navbar';

export default function App() {
  //const [open, setOpen] = useState(false);
  return (
    
<>
<BrowserRouter>
  <Navbar/>
  <GlobalStyle/>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/outro" element={<Outro/>}/>
    <Route path="*" element={<h1> Not found</h1>}/>
    
  </Routes>
  

  
</BrowserRouter>


</>

  );
}
