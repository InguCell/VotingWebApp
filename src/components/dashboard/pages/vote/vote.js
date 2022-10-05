import React from "react";
import ongoing from "./ongoing.png"
import "./vote.css"
import { Votebars, Votebars2,Votebar3,Votebars4 } from "./rectProgressbars";
import { Progressbar1,Progressbar2, Progressbar3 } from "./circularprogress";
import 'react-circular-progressbar/dist/styles.css';
export default function Vote(){

            const progressbar = (bars) =>
                <div className="bar-sizes">
                    {bars}
                </div>

            const bars={
                one: progressbar(<Progressbar1 />),
                two: progressbar(<Progressbar2 />),
                three:progressbar(<Progressbar3 />)

            }
    return(
        <div className="vote-overall-first">
            <div className="vote-overall-first-greet">
            <h1>Hello <span>Davida</span></h1>
            <p>Welcome to Central University voting platform</p>
            </div>
            

            <div className="vote-overall-second">
                <div className="ongoing-wrapper" style={{backgroundColor:"white"}}>
                    <section>
                        <h5>Ongoing Election</h5>
                        <ul>
                            <li>Src Elections</li>
                            <li>Departmental Elections</li>
                        </ul>
                    </section>
                    <section>
                        <img className="ongoing-pic" src={ongoing} alt="Election"/>
                    </section>
                </div>


                <div className="calendar-main" style={{backgroundColor:"white"}}>
                    <h5>Calendar</h5>
                    <div className="calendar-main2">
                        <section style={{textAlign:"center"}}>
                            <h6>Today</h6>
                            <p>9am-10am</p>
                        </section>
                        <section style={{textAlign:"center"}}>
                            <h6>Next Week</h6>
                            <p>12pm-3pm</p>
                        </section>
                        <section style={{textAlign:"center"}}>
                            <h6>This Month</h6>
                            <p>3pm-4pm</p>
                        </section>
                    </div>

                    <div>
                        <h5 style={{color:"rgb(140,31,31)", fontWeight:"600"}}>8th<br/> July</h5>
                        <section class="depart-sec"><p>CS/IT Departmental Elections</p></section>
                    </div>
                </div>


                <div className="activity-main" style={{backgroundColor:"white"}} >
                    <h5>Activity</h5>

                    <section className="activity-first" >
                        <div >
                            <div style={{backgroundColor:"rgb(140,31,31)"}} className="activity-bullets"></div>
                            <p style={{marginBottom:"0px"}}>Ongoing</p>
                        </div>

                        <div >
                            <div style={{backgroundColor:"rgb(255,180,16)"}} className="activity-bullets"></div>
                            <p style={{marginBottom:"0px"}}>Pending</p>
                        </div>

                        <div >
                            <div style={{backgroundColor:"rgb(16,98,194)"}} className="activity-bullets"></div>
                            <p style={{marginBottom:"0px"}}>Completed</p>
                        </div>
                    </section>

                    <section className="activity-second">
                        <div className="activity-second-div">
                            <p>Src Election</p>
                            <div style={{backgroundColor:"rgb(255,180,16)"}} className="activity-bullets"></div>
                            <p>21-07-2022</p>
                        </div>

                        <div className="activity-second-div">
                            <p>CS/IT Department elections</p>
                            <div style={{backgroundColor:"rgb(140,31,31)"}} className="activity-bullets"></div>
                            <p>ongoing</p>
                        </div>

                        <div className="activity-second-div">
                            <p>FASS Department elections</p>
                            <div style={{backgroundColor:"rgb(16,98,194)"}} className="activity-bullets"></div>
                            <p>concluded</p>
                        </div>

                        <div className="activity-second-div">
                            <p>CBS Election</p>
                            <div style={{backgroundColor:"rgb(16,98,194)"}} className="activity-bullets"></div>
                            <p>Ongoing</p>
                        </div>
                    </section>
                </div>
                <div className="live-result-main" style={{backgroundColor:"white"}}>
                    <div><Votebars/></div>
                    <div><Votebars2/></div>
                    <div><Votebar3/></div>
                    <div><Votebars4/></div>
                </div>
                
                
                <div className="monitor-circular-bars" style={{backgroundColor:"white"}}>
                    <h5>Monitor your voting process here</h5>

                    <section className="monitor-first-section">
                        <div  style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <div >{bars.one}</div>
                            <h6>No of Students Registered</h6>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <div>{bars.two}</div>
                            <h6>Total number of students</h6>
                        </div>

                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <div>{bars.three}</div>
                            <h6>No of Registered candidate</h6>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}