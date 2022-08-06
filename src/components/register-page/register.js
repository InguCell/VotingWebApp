import React from "react";
import "./register.css";
import regis from "./regis.png"
import {Form, Container, Button, Nav} from "react-bootstrap";


export default function Register(){
    const home_form=
    <Form>
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
                <option>INT</option>
                <option>DPH</option>
                <option>NUR</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-5">
            <Form.Control id="pass" type="password" placeholder="Password"/>
        </Form.Group>

        <Form.Group className="mb-5" id="repas">
            <Form.Control id="repass" type="password" placeholder="Re-Password"/>
            <Form.Text id="text">By Clicking the sign in button</Form.Text>
            <Form.Text id="text1"><Nav.Link>Terms and conditions</Nav.Link></Form.Text>
        </Form.Group>

        <Form.Group className="mb-5">
            <Button id="sign_in_button">Sign In</Button>
        </Form.Group>
    </Form>

    return(
        <div className="home_body">
            <Container>
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