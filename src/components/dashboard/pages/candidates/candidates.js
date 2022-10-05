import React from "react";
import { Button } from "react-bootstrap";
import "./candidate.css";
import avatar from "./noAvatar.jpg"


export default function Candidates(){
    const candidate_details=
    <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
        <img style={{width:"120px", height:"120px", borderRadius:"50%"}} src={avatar}/>
        <p>Davida Dzato</p>
        <h5>SRC President</h5>
        <Button className="dash-button dash-button1 candidate-view">View Details</Button>
    </div>

    return(
        <div className="candidate-main">
            <div className="dashboard-header candidate-header">
                <h1>src candidates</h1>
                <p>Meet the 2022 SRC candidates, these candidates have been verified by the electoral commission</p>     
            </div>

            <div className="candidate-main-container">
                {candidate_details}
                {candidate_details}
                {candidate_details}
                {candidate_details}
                {candidate_details}
            </div>
            
        </div>
    )
}