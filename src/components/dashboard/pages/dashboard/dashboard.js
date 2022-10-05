import React from "react";
import { Form,Button } from "react-bootstrap";
import avatar from "./noAvatar.jpg"
import "./dashboard.css"
export default function Dashboard(){
    const dashForm=
        <Form>
            <Form.Group className="dash-form mb-5">
                <div>
                <Form.Label className="dash-form-label ">student's name</Form.Label>
                <Form.Control type="text" required className="dash-form-control "/>
                </div>
                
            </Form.Group>

            <Form.Group className="dash-form mb-5">
                <div>
                <Form.Label className="dash-form-label ">reset password</Form.Label>
                <Form.Control placeholder="Current Password" type="password" required className="dash-form-control "/>
                </div>
                
            </Form.Group>

            <Form.Group className="dash-form mb-5">
                <div>
                <Form.Control placeholder="New Password" type="password" required className="dash-form-control "/>
                </div>
            </Form.Group>

            <Form.Group className="dash-form-btn mb-5">
                <div><Button className="dash-save">Save Changes</Button></div>
                
            </Form.Group>
        </Form>
    
    return(
        <div className="dashboard-main">
            <div className="dashboard-header">
                <h1>Account </h1>
                <p>Make changes to your Account</p>
            </div>
            
            <div className="avatar-section">
                <img style={{borderRadius:"50%"}} className="dashboard-img" src={avatar}/>
                <Button className="dash-button dash-button1">Upload</Button>
                <Button className="dash-button dash-button2">Remove</Button>
            </div>

            <div className="dashhboard-form">{dashForm}</div>
            
        </div>
    )
}