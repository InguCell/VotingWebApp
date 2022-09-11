import React from 'react'
import {Container} from 'react-bootstrap'
import "./Part5.css"
import how from './picture7.png';
import voting from './picture8.webp'



export default function () {




    const inner_container = 
    <>

    <div fluid className='inner_container_p5'>

          <div className='p5_heading top-heading'>
            <h2>
            How it works
            </h2>     
          
            <p className='p5_sub_heading sub-top-heading'>Simple and easy to use using these three(3) steps</p>      
          
          </div>
      

        <Container fluid className="part4-lettering part5-lettering">
          
          
          
          <div className='vote-div1'>
            <img src={how} className='graph  vote-steps'>
            </img>

          </div>

          <div className='vote-div2'>
            <img src={voting} className='voting'>

            </img>

          </div>
            
        </Container>


           
      

    </div>

      
    </>
      

             


const main_container = <Container fluid className='main_container_p5'>

     
{inner_container}
</Container>



 
  return (
  
  <div className='whole'>
       {main_container}

  </div>
  
  )
}
