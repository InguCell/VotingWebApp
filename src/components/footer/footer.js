import React from "react";
import Footer from "./footer-index";

export default function FooterComponent(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Central University</Footer.Title>
                        <Footer.Title>Cu-Developers</Footer.Title>
                        <Footer.Link>Copyright-Cu Developers</Footer.Link>
                        <Footer.Link>Limited-All rights reserved</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Product</Footer.Title>
                        <Footer.Link>Web and App</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Legal</Footer.Title>
                        <Footer.Link>Terms and Conditions</Footer.Link>
                        <Footer.Link>Privacy policy</Footer.Link>
                        <Footer.Link>FAQs</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Connect</Footer.Title>
                        <Footer.Link>E-mail:</Footer.Link>
                        <Footer.Link>cu.Developerscommunity@gmail.com</Footer.Link>
                        <Footer.Link>Location:Central University</Footer.Link>
                        <Footer.Link>Telephone: 0559846211</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}