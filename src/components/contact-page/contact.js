import React from "react";
import {Form, Container, Button} from "react-bootstrap";
import "./contact.css";
import active from "./active.png"

export default function Contact(){
    const form_Main=
    <Form>
            <h4 className="lbl">contact us</h4>
            <Form.Group className="contact_inputs">
                <Form.Label className="mb-0">Name</Form.Label>
                <Form.Control id="name" type="text" required/>
            </Form.Group>

            <Form.Group className="contact_inputs">
                <Form.Label className="mb-0">Enter your student e-mail</Form.Label>
                <Form.Control id="mail" type="email" required/>
            </Form.Group>

            <Form.Group className="contact_inputs">
                <Form.Label className="mb-0">Department</Form.Label>
                <Form.Control id="dept" type="text" required />
            </Form.Group>

            <Form.Group className="contact_inputs">
                <Form.Label className="mb-0" style={{display:"block"}}>Comments</Form.Label>
                <input type="textarea" required />
            </Form.Group>

            <Form.Group className="contact_inputs">
                <Button id="form_button" type="submit" >Submit</Button>
            </Form.Group>
    </Form>
        
    return(
        <div className="contact_body home_body">
            <Container fluid id="login_container">
            <div className="header">
                <h1>Thank You For Using The CU Voting System</h1>
                <p>Do Contact Us via This Platform. Our Goal Is To Make voting Easy for The Students And We cannot do
                    Without Your Comments And Reviews.
                </p>
            </div>
            
            <div className="second_row second_row2">

                <img class="contact_img"src={active} alt="IMAGE"/>
                <div className="form_Main_Box">{form_Main}</div>
            </div>

            </Container>
        </div>
    )
}