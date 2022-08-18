import React from "react";
import { Container } from "react-bootstrap";
import "./part5.css";
import part5_vote from "./part5vote.png";


export default function Part5(){
    return(
        <div class="part5_main">
            <Container fluid>
                <div class="part5_head">
                    <h2 class="part5_main_head">How it works</h2>
                    <p class="part5_sub_head">Simple and easy to use using these three(3) steps</p>
                </div>
                <div class="set_flex">
                    <div class="part5_steps">
                        <ul class="u_list">
                            <li><span class="part5_numb">1</span> <h3 class="step_head">Sign in to register</h3>
                            <p class="step_head_sub">Create a new account or login to your account</p>
                            </li>
                            <li><span class="part5_numb">2</span>
                            <h3 class="step_head">Vote</h3>
                            <p class="step_head_sub">Vote for your prefered candidate</p></li>
                            <li><span class="part5_numb">3</span>
                            <h3 class="step_head">View election result</h3>
                            <p class="step_head_sub">View election result of various candidates</p></li>
                        </ul>
                    </div>
                    <img class="part5pic"src={part5_vote}/>
                </div>
            </Container>
        </div>
    )
}