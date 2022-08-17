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
  
  <div className='heading headingp3'>
    <Container fluid >
   <div className='top-heading t-headingp3'>
    Monitoring the voting process
    <br /> <br /><span className='sub-top-heading'>
   Track the number of votes and voter with our real-time counter
   </span>
   </div>
  </Container>
    </div>
//container ready


const part2 = 
<section >

<div className='cards part2 part3' >

  

<Container fluid>
  
  <Row>
        <Col>
<div className='card-body card-body3'>
<Card className='cards cards3'>
  <div>
  {bars.one}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading card-headingp3">
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
<div className='card-body body2'>
<Card className='cards cards3'>
  <div className='bar2'>
  {bars.two}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading card-headingp3">
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
<div className='card-body body3'>
<Card className='cards cards3'>
  <div className='bar3'>
  {bars.three}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading card-headingp3">
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
    <div>

     {features}
        {part2}


    </div>
  )
}
