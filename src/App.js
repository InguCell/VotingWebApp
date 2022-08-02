import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import  Footer from "./components/Footer/Footer";
import Contact from "./components/contact-page/contact";
import Landing from  ".//routes/landing-page/LandingPage";
import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';


function App() {
  return (

    <div>
    <Navbar />
<BrowserRouter>
<Routes>
  <Route exact path="/" element={ <Landing /> }></Route>
</Routes>

<Routes>
  <Route path="/contact" element={ <Contact/> }></Route>
</Routes>



</BrowserRouter>


      <Footer/>
    </div>
  );
}

export default App;
