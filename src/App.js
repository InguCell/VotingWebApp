import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import  Footer from "./components/Footer/Footer";
import Contact from "./components/contact-page/contact";
import Landing from  "./components/routes/landing-page/LandingPage";
import { BrowserRouter, Outlet, Route, Router, Routes} from 'react-router-dom';


function App() {
  return (

    <div>
   
<BrowserRouter>
<Navbar />

<Routes>
  <Route path="/" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } />
  
</Routes>
<Outlet />


<Footer/>
</BrowserRouter>


     
    </div>
  );
}

export default App;
