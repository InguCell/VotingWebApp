import React from 'react'
import { Container, Row, Col , Card } from 'react-bootstrap'
import 'react-circular-progressbar/dist/styles.css';
import ProgessBars from './progressbar1'
import Progressbar2 from './progressbar2';
import Progressbar3 from './progressbar3';
import "./Part3.css"


export default function () {


const progressbar = (bars) =>
<div className="bar-sizes">
  {bars}
</div>

const bars={
    one: progressbar(<ProgessBars />),
    two: progressbar(<Progressbar2 />),
    three:progressbar(<Progressbar3 />)

}

  const features = 
  
      <div className='heading'>
        <Container fluid >
          <div className='top-heading top-heading3'>
            <h2>Monitoring the voting process</h2>
            <span className='sub-top-heading'>
              Track the number of votes and voter with our real-time counter
            </span>
          </div>
        </Container>
      </div>



const part2 = 
  <section class="part2-session part2-session3" >

    <div className='cards cards3' >

  

      <Container fluid> 
        <Row>
          <Col>
            <div className='card-body'>
              <Card className='cards cards3'>
                <div>
                  {bars.one}
                </div>
                
                <Card.Body class="card-sub">
                  <Card.Title><h3 class="card-heading card-heading3 ">
                    Number of Students Registered
                    </h3></Card.Title>
                  <Card.Text><p class="card-sub-heading">        
                    </p>     
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>    
          </Col>

          
          <Col>
            <div className='card-body'>
              <Card className='cards cards3'>
                <div className='bar2'>
                  {bars.two}
                </div>

                <Card.Body class="card-sub">
                  <Card.Title><h3 class="card-heading card-heading3">
                    Total Number of Votes
                  </h3></Card.Title>
                  <Card.Text><p class="card-sub-heading">    
                    </p>
            
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>    
          </Col>


          <Col>
            <div className='card-body'>
              <Card className='cards cards3'>
                <div className='bar3'>
                  {bars.three}
                </div>

                <Card.Body class="card-sub">
                  <Card.Title><h3 class="card-heading card-heading3">
                    Number of Registered Candidates
                    </h3></Card.Title>
                  <Card.Text><p class="card-sub-heading">
                    </p>      
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>    
          </Col>

              
              
        </Row>
            


        
      
      </Container>
    </div>


</section>


 
  return (
    <div className='whole whole3'>

     {features}
        {part2}


    </div>
  )
}