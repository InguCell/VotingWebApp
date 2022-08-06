import React from 'react'
import "./Part2.css"
import { Container , Col , Row, Card} from 'react-bootstrap'
import secure from "./secure.png"
import news from "./news.png"
import vote from "./vote.png"

export default function Part2() {
//container ready

const part2 =  
<div className='cards part2'>
<Container fluid>
  
  <Row>
        <Col>
<div className='card-body'>
<Card className='cards'>
  <div>
  <Card.Img variant="top" src={secure} className="img" />
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Secured System
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading">
        With our system your data is 
safe and secured
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
    </div>    
        </Col>

        <Col>
<div className='card-body'>
<Card className='cards'>
  <div>
  <Card.Img variant="top" src={news} className="img" />
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Secured System
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading">
        With our system your data is 
safe and secured
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
    </div>    
        </Col>


        <Col>
<div className='card-body'>
<Card className='cards'>
  <div>
  <Card.Img variant="top" src={vote} className="img" />
  </div>

      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Secured System
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading">
        With our system your data is 
safe and secured
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
    </div>    
        </Col>

        
        
      </Row>
      


  
 
</Container>
</div>
 
  return (
    <div>
        {part2}
    </div>
  )
}
