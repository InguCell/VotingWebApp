import React from "react";
import {Nav} from 'react-bootstrap';
import "./footer.css";
import footer_logo from "./footer_logo.png"
export default function Footer(){
    
    return(
        <div className="Main_footer">
            <div className="Container" >
                <div className="row">
                    <div className="col" >
                        <img class="footer_log"src={footer_logo} alt="logo"/>
                    <h5 className="central">Central University</h5>
                    <h5 className="central2">Cu-Developers</h5>
                    <Nav.Link  className="copy">Copyright Cu-Developers</Nav.Link>
                    </div>

                    <div className="col">
                    <h5 style={{marginBottom:"0px"}}>Legal</h5>
                    <Nav.Link className="links">Terms and Conditions</Nav.Link>
                    <Nav.Link style={{marginTop:"20px"}} className="links">Privacy and policy</Nav.Link>
                    </div>
                    
                    <div className="col">
                    <h5>Connect</h5>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>E-mail:</span> cu.developerscommunity@gmail.com</Nav.Link>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>Location:</span> Central University</Nav.Link>
                    <Nav.Link style={{marginTop:"5px"}} className="links"><span>Telephone:</span> 0559846211</Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
