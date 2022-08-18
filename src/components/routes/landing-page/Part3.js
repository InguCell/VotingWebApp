import React from 'react'
import { Container, Row, Col , Card } from 'react-bootstrap'
import "./part3.css"
import 'react-circular-progressbar/dist/styles.css';
import ProgessBars from './progressbar1'
import Progressbar2 from './progressbar2';
import Progressbar3 from './progressbar3';


export default function () {


const progressbar = (bars) =>
<div  style={{width:200, height:200}}>
  {bars}
</div>

const bars={
    one: progressbar(<ProgessBars />),
    two: progressbar(<Progressbar2 />),
    three:progressbar(<Progressbar3 />)

}

  const features = 
  
  <div className='heading part3_heading'>
    <Container fluid >
   <div className='top-heading part3_top-heading'>
    Monitoring the voting process
    <br /> <br /><span className='sub-top-heading part3_sub-top-heading' >
   Track the number of votes and voter with our real-time counter
   </span>
   </div>
  </Container>
    </div>
//container ready


const part2 = 
<section >

<div className='part3_cards part3' >

  

<Container fluid>
  
  <Row className='part3_row'>
        <Col>
<div className='card-body part3_card-body'>
<Card className='cards part3_cards'>
  <div class="card_bar">
  {bars.one}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading part3_card-heading">
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
<div className='card-body body2 part3_card-body part3_body2'>
<Card className='cards part3_cards'>
  <div class="card_bar">
  {bars.two}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading part3_card-heading">
        Total Number of Votes
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading ">
      

        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
    </div>    
        </Col>


        <Col>
<div className='card-body body3 part3_card-body3'>
<Card className='cards part3_cards'>
  <div class="card_bar">
  {bars.three}
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading part3_card-heading">
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
