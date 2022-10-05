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

//Dashboard
import Vote from "./components/dashboard/pages/vote/vote";
import Voteguidelines from "./components/dashboard/pages/voteGuidelines/voteGuidelines";
import Candidatedetails from "./components/dashboard/pages/candidateDetails/candidateDetail";
import Dashboard from "./components/dashboard/pages/dashboard/dashboard";
import Candidates from "./components/dashboard/pages/candidates/candidates";
import Sidebar from "./components/dashboard/sidebar/sidebar";

 import Landing from  "./components/routes/landing-page/LandingPage";
// import { BrowserRouter, Outlet, Route, Routes} from 'react-router-dom';



function App() {
  var cbf;

 var link = '/404';
  
  console.log(link);


  return (

    <div className="main_app_js_div">       
      
      <BrowserRouter>
      <Sidebar className="fixed-sidebar">

        <Routes>
            <Route path="/Candidatedetails" element={ <Candidatedetails/> } />
            <Route path="/Candidates" element={ <Candidates/> } />
            <Route path="/Dashboard" element={ <Dashboard/> } />
            <Route path="/Vote" element={ <Vote/> }/>
            <Route path="/Voteguidelines" element={ <Voteguidelines/> }/> 
        </Routes>

      </Sidebar>


      </BrowserRouter>
      

   
{/* <BrowserRouter>
<Navbar />

<Routes>
  <Route path="/contact" element={ <Contact/> } />
  <Route path="/register" element={ <Register/> } />
  <Route path="/FAQ" element={ <FAQ/> } />
  <Route path="/Login" element={ <Login/> }/>
  <Route path="/forgot" element={ <Forgot/> }/>  
  <Route exact path="/VotingWebAppHome" element={ <Landing /> }></Route>
  <Route path="/contact" element={ <Contact/> } /> 
  <Route path="/about" element={ <About/> } />
  //Error page route link..... Connect when needed
  <Route path={link} element={ <Contact/> } />
</Routes>


<Footer/>
</BrowserRouter> */}


     {/* [] key features integrated for performace--- */}
    </div>
  );
}

export default App;
