import React from 'react'
import "./Part2.css"
import { Container , Col , Row, Card, Button} from 'react-bootstrap'
import star from "./picture2.png"
import secure from "./picture3.png"

export default function Part2() {
//container ready

const part2 =  
<Container fluid className='part2'>


<Row>
        <Col xs>

        <Card className='cards' style={{border:""}}>
      <Card.Img variant="top" src={star} className="star" />
      <div>
           <img src={secure} className='secure'></img>
      </div>
      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Secured System
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading">
        With our system,your data is 
safe and secured
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col xs={{ order: 12 }}>Second, but last</Col>
        <Col xs={{ order: 1 }}>Third, but second</Col>
      </Row>
      
  </Container>

 
  return (
    <div>
        {part2}
    </div>
  )
}
