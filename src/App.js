import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer.js";
import Contact from "./components/contact-page/contact";
import Landing from  ".//routes/landing-page/LandingPage";
import Register from "./components/register-page/register";
import FAQ from "./components/FAQs/faqs";
import { BrowserRouter, Outlet, Route, Router, Routes} from 'react-router-dom';


function App() {
  return (

    <div>
   
<BrowserRouter>
<Navbar />

<Routes>
  <Route path="/" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } />
  <Route path="/register" element={ <Register/> } />
  <Route path="/FAQ" element={ <FAQ/> } />
  
</Routes>
<Outlet />


<Footer/>
</BrowserRouter>


     
    </div>
  );
}

export default App;
