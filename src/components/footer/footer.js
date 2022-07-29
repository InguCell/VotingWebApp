import React from "react";
import {Nav} from 'react-bootstrap';
import "./footer.css"
export default function Footer(){
    const footer_Title=(props)=> <h4>{props.children}</h4>;
    const footer_Title_2=(props)=><h6>{props.children}</h6>;


    return(
        <div className="Main_footer">
            <div className="Container" >
                <div className="row">
                    <div className="col" >
                    <footer_Title className="central"><a id="logo"><img href="" alt=""/></a><span>Central University</span></footer_Title>
                    <footer_Title_2>Cu-Developers</footer_Title_2>
                    <Nav.Link>Copyright Cu-Developers</Nav.Link>
                    <Nav.Link>Limited All rights reserved</Nav.Link>
                    </div>
                    
                    {/* <div className="col">
                    <footer_Title>Product</footer_Title>
                    <Nav.Link>Web and App</Nav.Link>
                    </div> */}

                    <div className="col">
                    <footer_Title>Legal</footer_Title>
                    <Nav.Link>Terms and Conditions</Nav.Link>
                    <Nav.Link>Privacy and policy</Nav.Link>
                    <Nav.Link>FAQs</Nav.Link>
                    </div>
                    
                    <div className="col">
                    <footer_Title>Connect</footer_Title>
                    <footer_Title_2>E-mail:</footer_Title_2>
                    <Nav.Link>cu.developerscommunity@gmail.com</Nav.Link>
                    <Nav.Link><span>Location:</span> Central University</Nav.Link>
                    <Nav.Link><span>Telephone:</span> 0559846211</Nav.Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
