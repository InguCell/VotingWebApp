import React from "react";
import { Container } from "react-bootstrap";
import bar1 from "./Bars.png";
import bar2 from "./Bars1.png";
import bar3 from "./Bars2.png";
import bar4 from "./Bars3.png";
import "./part4.css"


export default function Part4(){

    return(
        <div class="part4_block">
            <Container fluid>
                <div className="part4_sup_block">
                    
                    <div class="part4_writing">
                            <h2 className="part4_writing_head">view live result</h2>
                        
                        <ul>
                            <li><p>View live results of the elections instantly on our home page without logging in</p></li>
                            <li><p>You can also check the electoral candidates page</p></li>
                        </ul>
                    
                    </div>
                    
                    <div class="bars_block">
                        
                        <div class="bars_sub"> 
                            
                            <h5 class="no_votes">No of votes</h5>
                                
                                <div class="barpic_cont">
                                    
                                    <div class="barpic" >
                                        <img class="barpic_img"  src={bar1} alt=""/>
                                        <span>Churchill</span>
                                    </div>
                            
                                    <div class="barpic">
                                        <img class="barpic_img" src={bar2} alt=""/>
                                        <span>Davida</span>
                                    </div>
                            
                                    <div class="barpic">
                                        <img class="barpic_img" src={bar3} alt=""/>
                                        <span>Churchill</span>
                                    </div>
                        
                                    <div class="barpic">
                                        <img class="barpic_img" src={bar4} alt=""/>
                                        <span>Churchill</span>
                                    </div>
                                
                                </div>
                                
                                <h5 class="candidate">candidates</h5>
                        
                        </div>
                    
                    </div>
                        
                
                </div> 
            
            </Container>
        
        </div>
        
    )
}