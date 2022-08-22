import React from 'react'
import "./Part2.css"
import { Container , Col , Row, Card} from 'react-bootstrap'
import secure from "./secure.png"
import news from "./news.png"
import vote from "./vote.png"

export default function Part2() {


  const features = 
  
  <div className='heading'>
    <Container fluid >
   <div className='top-heading'>
    <h2>Our Features</h2>
    <span className='sub-top-heading'>
   A secured system that provides an easy way to vote at your comfort
   </span>
   </div>
  </Container>
    </div>
//container ready


const part2 = 
  <section class="part2-session">

    <div className='cards'>

  

      <Container fluid>
        
        <Row>
            <Col>  
              <div className='card-body'>
                <Card className='cards'>
                  <div class="part2_img_div">
                    <Card.Img variant="top" src={secure} className="img" />
                  </div>
                  
                  <Card.Body class="card-sub">
                    <Card.Title><h3 class="card-heading">
                      Secured System
                    </h3></Card.Title>
                    <Card.Text><p class="card-sub-heading">
                      With our system your data is safe and secured
                      </p>
                        
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>    
            </Col>

            <Col>
              <div className='card-body'>
                <Card className='cards'>
                  <div class="part2_img_div">
                    <Card.Img variant="top" src={news} className="img" />
                  </div>
                  
                  <Card.Body class="card-sub">
                    <Card.Title><h3 class="card-heading">
                      Vote Online
                  </h3></Card.Title>
                    <Card.Text><p class="card-sub-heading">
                    With just a few clicks,you can 
                    vote for your preferred canditates
                    </p>   
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>    
            </Col>


            <Col>
              <div className='card-body'>
                <Card className='cards'>
                  <div class="part2_img_div">
                    <Card.Img variant="top" src={vote} className="img" />
                  </div>

                  <Card.Body class="card-sub">
                    <Card.Title><h3 class="card-heading">
                    Real Time Results
                    </h3></Card.Title>
                    <Card.Text><p class="card-sub-heading">
                    View real time voting results and 
                    score for each canditates
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
    <div className='whole'>
    
    {features}
        {part2}
    </div>
  )
}