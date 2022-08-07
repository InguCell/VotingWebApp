import React, { Component , lazy, Suspense } from 'react'; 
import girl_picture from './picture1.png';
import { Container} from "react-bootstrap";


export default function Part1() {

    const buttons = {
        register: <button className='register-button' class="register-button">Register as a voter</button>
      }
    
    
    const buttons_conatiner = <div className='landing-buttons-container'>
      {buttons.register}
    </div>   

    const part1 = <Container fluid className='part1'>

    

      <img class="picture1" src={girl_picture} alt=""/> 
      
      <div className='writing-container'>
    <h2 class="part1-writing">Fast, Secured and <br />Accessible Voting System</h2>  
    <div class="part1-sub">
    Voting made easy for you. This website is designed to ensure
     a secured voting session for every student
    
     {buttons_conatiner}
    </div>
    </div>
    
    
     
    </Container>


  return (
    <div>
{part1}   
    </div>
  )
}
