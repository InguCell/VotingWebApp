import React from "react";
import "./voteGuide.css"
export default function Voteguidelines(){
    return(
        <div className="guide-main-wrapper">
            <section class="guide">
                <h1 style={{textTransform:"capitalize", color:"rgb(140,31,31)"}}>Voter's guidelines</h1>
                <ul>
                    <li>You are eligle to vote only once</li>
                    <li>You are a student in this school, undertaking a course in your academic years</li>
                </ul>
            </section>
            

            <section class="guide">
                <h2 style={{textTransform:"capitalize", color:"rgb(140,31,31)"}}>When you can be denied registration</h2>
                <ul>
                    <li>You are not a student of this school</li>
                    <li>If the school declares you have violated the voters requirement. This may include general misonduct</li>
                </ul>
            </section>

            <section class="guide">
                <h2 style={{textTransform:"capitalize", color:"rgb(140,31,31)"}}>conduct during election</h2>
                <ul>
                    <li>As Voters are expected to familiarize with the candidate of their choice read their campaign <br/> promise</li>
                    <li>As Voters are expected to vote for just one candidate</li>
                    <li>All Voters are expected to conduct themselves proparly offline and online during elections</li>
                    <li>Report any problem and Ask Questions if needed</li>
                </ul>
            </section>
        </div>
    )
}