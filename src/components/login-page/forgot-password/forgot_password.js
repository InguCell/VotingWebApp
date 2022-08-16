import React from "react";
import "./forgot_password.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Container, Form, Button } from "react-bootstrap";
import central_logo from "./central-logo.png";
import forgot_pic from "./forgot-pic.png";
import { useNavigate } from "react-router";

export default function Forgot(){
    const navigate= useNavigate();
    const forgot_form=
    <Form>
        <Form.Label 
        id="forgot_label"
        className="mb-4"
        >forgotten password</Form.Label>
        <Form.Text style={{fontSize:"16px"}}>Enter your your student email and we would send you a code to reset your password</Form.Text>
        <Form.Group className="mb-5 mt-4">
            <Form.Control type="email" id="forgot_mail" placeholder="Enter your student email"/>
        </Form.Group>
        <Form.Group>
            <Button id="send_btn">send code</Button>
        </Form.Group>
    </Form>
    return(
        <div className="forgot_main">
            <div className="forgot_head">
                {/* <img id="forgot_logo" src={central_logo}/> */}
                <FontAwesomeIcon 
                id="forgot_arrow" 
                icon={faArrowLeft} 
                size="4x" 
                color="rgb(140,31,31)"
                onClick={()=>navigate(-1)}
                />
            </div>
            <Container>
                <div className="forgot_sec">
                    <img id="forgot_pic" src={forgot_pic}/>
                    <div id="forgot_form">{forgot_form}</div>
                </div>
            </Container>
        </div>
    )
}