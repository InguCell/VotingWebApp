import React from "react";
import "./about.css";
import about_us from "./about-us.png"
import { Container } from "react-bootstrap";

export default function About(){
    return(
        <div>
            <Container>
                <div class="about_first">
                    <h1>our aim is to make elections easy and fair</h1>
                    <img id="about_us_pic" src={about_us}/>
                </div>
                <div class="about_sec">
                    <div class="about_first_col">
                        <div class="abt_img_cont"><img/></div>
                        <h4 id="about_first_title">The idea</h4>
                        <p>We conducted an indepth research and saw<br/>
                        the need for an online voting system which<br/>
                        would speed up electoral processes and help<br/>
                        student vote for their preferred candidates. 
                        </p>
                    </div>
                    <div class="about_sec_col">
                        <div class="abt_img_cont"><img/></div>
                        <h4 id="about_sec_title">The solution</h4>
                        <p>Our team is set out to develop a system which<br/>
                        would crub the slow electoral process and<br/>
                        create a secured platform that ensures that a fair<br/>
                        election.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}