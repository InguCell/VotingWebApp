import React from 'react'
import "./Part2.css"
import { Container , Col , Row, Card, Button} from 'react-bootstrap'
import star from "./picture2.png"
import secure from "./picture3.png"
import news from "./picture4.png"
import vote from "./picture5.png"

export default function Part2() {
//container ready

const part2 =  
<Container fluid className='part2'>


<Row>
        <Col xs>
<div className='card1-pos'>
<Card className='cards cards1'>
      <Card.Img variant="top" src={star} className="star" />
      <div>
           <img src={secure} className='secure'></img>
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
        <Col xs={{ order: 12 }}>

            <div className='card2-pos'>
            <Card className='cards cards2'>
      <Card.Img variant="top" src={star} className="star" />
      <div>
           <img src={news} className='news secure'></img>
      </div>
      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Vote Online
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading">
        With just a few clicks you can vote for your preferred candidates
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

        
        </Col>
        
        <Col xs={{ order: 1 }}>

            <div className='card3-pos'>
            <Card className='cards cards3'>
      <Card.Img variant="top" src={star} className="star star-alt3" />
      <div>
           <img src={vote} className='vote secure'></img>
      </div>
      <Card.Body class="card-sub">
        <Card.Title><h3 class="card-heading">
        Real Time Results
            </h3></Card.Title>
        <Card.Text><p class="card-sub-heading sub-alt3">
        View real time voting results and scores for each candidates
        </p>
      
        </Card.Text>
      </Card.Body>
    </Card>

            </div>

        
        </Col>
      </Row>
      
  </Container>

 
  return (
    <div>
        {part2}
    </div>
  )
}
