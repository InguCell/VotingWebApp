import React from 'react'
import {Container} from 'react-bootstrap'
import "./Part4.css"
import graph from './picture6.png';



export default function () {




    const inner_container = 
    <>

<div fluid className='inner_container'>
        <img src={graph} className='graph'>
        
        </img>
   

      </div>

      <div fluid className= "inner_container">
        <Container fluid className="part4-lettering">
            <h2>View Live Result</h2>
            <ul>
                <li>
                    View live results of the elections instantly on our home page without loggin in.
                </li>
                <li>
                    You can also check the electoral canditates page.
                </li>
            </ul>
        </Container>


      </div>
    </>
      

             


const main_container = <Container fluid className='main_container'>
{inner_container}
</Container>



 
  return (
  <>
  <div className='whole'>
       {main_container}

  </div>
  </>
  )
}
