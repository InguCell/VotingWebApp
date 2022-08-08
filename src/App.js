import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";
import Contact from "./components/contact-page/contact";
import Landingpage from "./components/routes/landing-page/LandingPage";
import Register from "./components/register-page/register";
import FAQ from "./components/FAQs/faqs";
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';

 import Landing from  "./components/routes/landing-page/LandingPage";
// import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';



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
  <Route exact path="/" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } /> 
</Routes>
<Outlet />


<Footer/>
</BrowserRouter>


     


     {/* [] key features integrated for performace--- */}
    </div>
  );
}

export default App;
