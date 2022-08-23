import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash,faEye } from "@fortawesome/free-solid-svg-icons";
import {Form, Container, Button, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css";
import login from "./login.png";

export default function Login(){

    const [state, setstate]=useState(false);
    const toggleBtn=()=>{
        setstate(prevState=>!prevState);
    }
    const Login_form= 
    <Form>
        <h4 class="sign_in">Sign In</h4>
        <Form.Group id="st_group">
            <Form.Control className="stNo" type="text" placeholder="Student No"/>
        </Form.Group>
        <Form.Group id="login_group">
            <div style={{display:"flex"}}>
            <Form.Control className="login_pass" type={state?"text":"password"} placeholder="Password"/>
            <Button id="login-toggle" 
            style={{border:"none", background:"transparent"}}
            onClick={toggleBtn}>
                {state? <FontAwesomeIcon icon={faEyeSlash} color="rgb(140,31,31)"/>:<FontAwesomeIcon icon={faEye} color="rgb(140,31,31)"/>}
            </Button>
            </div>            
            <div className="lbl_link"><Form.Check id="check" type="checkbox" label="Remember me"/>
            <Nav.Link><Link  to="/forgot" className="forgot_pass">Forgot Password?</Link></Nav.Link>
            </div>            
        </Form.Group>
        <Form.Group >
            <Button id="sign_button">Sign In</Button>
        </Form.Group>
    </Form>

    return(
        <div className="login_main">
            <Container fluid id="login_container">
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