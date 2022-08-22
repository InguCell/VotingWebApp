import React from "react";
import "./appjs.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer.js";
import Contact from "./components/contact-page/contact";
import Landingpage from "./components/routes/landing-page/LandingPage";
import Register from "./components/register-page/register";
import FAQ from "./components/FAQs/faqs";
import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';
import Login from "./components/login-page/login";
import About from "./components/about-page/about";
import Forgot from "./components/login-page/forgot-password/forgot_password";

 import Landing from  "./components/routes/landing-page/LandingPage";
// import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';



function App() {
  return (

    <div className="main_app_js_div">
   
<BrowserRouter>
<Navbar />

<Routes>
  <Route path="/" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } />
  <Route path="/register" element={ <Register/> } />
  <Route path="/FAQ" element={ <FAQ/> } />
  <Route path="/Login" element={ <Login/> }/>
  <Route path="/forgot" element={ <Forgot/> }/>  
  <Route exact path="/" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } /> 
  <Route path="/about" element={ <About/> } />
</Routes>
<Outlet />


<Footer/>
</BrowserRouter>


     


     {/* [] key features integrated for performace--- */}
    </div>
  );
}

export default App;
