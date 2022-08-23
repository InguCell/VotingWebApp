import React from 'react'
import {Container} from 'react-bootstrap'
import "./Part5.css"
import how from './picture7.png';
import voting from './picture8.png'



export default function () {




    const inner_container = 
    <>

<div fluid className='inner_container_p5'>
    <div className='p5_heading'>
        <h2>
        How it works
        </h2>
      
        
        <p className='p5_sub_heading'>Simple and easy to use using these three(3) steps</p>
        
    </div>
        <img src={how} className='graph'>
        
        </img>
   

      </div>

      <div fluid className= "inner_container">
        <Container fluid className="part4-lettering">
            <img src={voting} className='voting'>
        
        </img>
        </Container>


      </div>
    </>
      

             


const main_container = <Container fluid className='main_container_p5'>

     
{inner_container}
</Container>



 
  return (
  <>
  <div>
       {main_container}

  </div>
  </>
  )
}
