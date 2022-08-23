import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";
import "./register.css";
import regis from "./regis.png"
import {Form, Container, Button, Nav} from "react-bootstrap";


export default function Register(){

    const [state, setstate]=useState(false);
    const toggleBtn=()=>{
        setstate(prevState=>!prevState);
    }

    const [repass, setrepass]=useState(false);
    const toggleBtn2=()=>{
        setrepass(prevState=>!prevState);
    }

    const home_form=
    <Form>
        <h4 className="lbl">Register here</h4>
        <Form.Group className="mb-5">
            <Form.Control id="number" type="text" placeholder="Enter your student id number"/>
        </Form.Group>

        <Form.Group className="mb-5">
            <Form.Control id="student_mail" type="email" placeholder="Enter your student e-mail"/>
        </Form.Group>

        <Form.Group className="mb-5">
            <Form.Select id="department">
                <option></option>
                <option>CSC</option>
                <option>Arts Department</option>
                <option>Arts And Social Department(Miotso)</option>
                <option>ATHE</option>
                <option>Central Business School(Miotso)</option>
                <option>School Of Architecture And Design</option>
                <option>School Of Medicine And Health(Miotso)</option>
                <option>School Of Pharmacy</option>
                <option>Theology And Mission(Miotso)</option>
                <option>Vision & Life</option>
                <option>School Of Engineering And Technology</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-5">
            <div style={{display:"flex"}} id="pass">
            <Form.Control  type={state?"text":"password"} placeholder="Password"/>
            <Button id="login-toggle" 
            style={{border:"none", background:"transparent"}}
            onClick={toggleBtn}>
                {state? <FontAwesomeIcon icon={faEyeSlash} color="rgb(140,31,31)"/>:<FontAwesomeIcon icon={faEye} color="rgb(140,31,31)"/>}
            </Button>
            </div>
        </Form.Group>

        <Form.Group className="mb-5" id="repas">
            <div style={{display:"flex"}} id="repass">
            <Form.Control  type={repass?"text":"password"} placeholder="Re-Password"/>
            <Button id="login-toggle" 
            style={{border:"none", background:"transparent"}}
            onClick={toggleBtn2}>
                {repass? <FontAwesomeIcon icon={faEyeSlash} color="rgb(140,31,31)"/>:<FontAwesomeIcon icon={faEye} color="rgb(140,31,31)"/>}
            </Button>
            </div>
            <Form.Text id="text">By Clicking the sign in button</Form.Text>
            <Form.Text id="text1"><Nav.Link>Terms and conditions</Nav.Link></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5">
            <Button id="sign_in_button">Sign In</Button>
        </Form.Group>
    </Form>

    return(
        <div className="home_body">
            <Container fluid>
                <div className="home_header">
                    <h1>Welcome!!</h1>
                    <p>Register As Voter On The Voting Platforms To Vote For The <br/> Candidate Of Your Choice</p>
                </div>
                <div className="second_row">
                    <img class="regis_pic" src={regis} alt="REGISTER"/>
                    <div className="home_form_box">{home_form}</div>
                </div>
            </Container>
        </div>
    )
}