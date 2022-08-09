import React from "react";
import {Form, Container, Button, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import login from "./login.png";

export default function Login(){
    const Login_form= 
    <Form>
        <h4 class="sign_in">Sign In</h4>
        <Form.Group id="st_group">
            <Form.Control className="stNo" type="text" placeholder="Student No"/>
        </Form.Group>
        <Form.Group id="login_group">
            <Form.Control className="login_pass" type="password" placeholder="Password"/>
            <Form.Check id="check" type="checkbox" label="Remember me"/>
            <Nav.Link className="forgot_pass">Forgot Password?</Nav.Link>
        </Form.Group>
        <Form.Group >
            <Button id="sign_button">Sign In</Button>
        </Form.Group>
    </Form>

    return(
        <div className="login_main">
            <Container id="login_container">
            <div className="login_header">
                <h1>sign in to <br/>redirect to the main page</h1>
            </div>
            <div className="login_sec_row">
                <div className="pic_col">
                    <p>if you don't have an account <br/> you can <Link id="log_reg_link" to="/register">register here</Link> </p>
                    <img class="login_pic" src={login}/>
                </div>
                <div className="form_col">{Login_form}</div>
            </div>
            </Container>
        </div>
    )
}