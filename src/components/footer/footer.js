import React from "react";
import {Nav} from 'react-bootstrap';
import "./footer.css";
import footer_logo from "./footer_logo.png"
export default function Footer(){
    // const footer_Title=(props)=> <h4>{props.children}</h4>;
    // const footer_Title_2=(props)=><h6>{props.children}</h6>;


    return(
        <div className="Main_footer">
            <div className="Container" >
                <div className="row">
                    <div className="col" >
                        <img class="footer_log"src={footer_logo} alt="logo"/>
                    <footer_Title className="central">Central University</footer_Title>
                    <footer_Title className="central2">Cu-Developers</footer_Title>
                    <Nav.Link  className="copy">Copyright Cu-Developers</Nav.Link>
                    {/* <Nav.Link>Limited All rights reserved</Nav.Link> */}
                    </div>

                    <div className="col">
                    <footer_Title style={{marginBottom:"0px"}}>Legal</footer_Title>
                    <Nav.Link className="links">Terms and Conditions</Nav.Link>
                    <Nav.Link style={{marginTop:"20px"}} className="links">Privacy and policy</Nav.Link>
                    </div>
                    
                    <div className="col">
                    <footer_Title>Connect</footer_Title>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>E-mail:</span> cu.developerscommunity@gmail.com</Nav.Link>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>Location:</span> Central University</Nav.Link>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>Telephone:</span> 0559846211</Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
