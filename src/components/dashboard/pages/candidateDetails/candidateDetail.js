import React from "react";
import "./candidateDetail.css"
import avatar from "../candidates/noAvatar.jpg"
export default function Candidatedetails(){
    return(
        <div className="detail-main-wrapper ">
            <div className="dashboard-header detail-main-wrapper2">
                <h1>Candidate's Profile</h1>
                <p>A page for a candidate's details and campaign promises</p>     
            </div>
            <div className="first-main-wrapper">
                <div className="second-main-wrapper">
                    <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}className="profile-section1">
                        <div className="img-body"><img className="candidate-profile-pic" alt="profile pic" src={avatar}/></div>
                        <p>Davida Dzato</p>
                        <h5>Vote as src President</h5>
                        <h6 style={{color:"rgb(140,31,31)"}}>#Deeds not words#</h6>
                    </div>

                    <div className="profile-main-wrapper">
                        <h5 class="profile-sub-head">Basic information</h5>
                        <div class="profile-sub1">
                            <section>
                                <h6>level</h6>
                                <p>level 300</p>
                            </section>
                            <section>
                                <h6>Department</h6>
                                <p>school of Technology</p>
                            </section>
                            <section>
                                <h6>Course</h6>
                                <p>Computer Science</p>
                            </section>
                        </div>

                        <h5 class="profile-sub-head">Experience</h5>
                        <div class="profile-sub2">
                            <section>
                                <div class="profile-bullet1"></div>
                                <p>Assistant Organiser for CSTA 2021-2022</p>
                            </section>

                            <section>
                                <div class="profile-bullet2"></div>
                                <p>Course Rep for CSC2019 year batch 2020-Ongoing</p>
                            </section>
                        </div>
                    </div>

                    <div className="profile-main-wrapper2">
                        <h5>Campaign promise</h5>
                        <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem 
                            accusantium doloremque laudantium, totam rem aperiam eaque ipsa, 
                            quae ab illo inventore veritatis et quasi architecto beatae vitae
                             dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit,
                              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, 
                              qui ratione voluptatem sequi nesciunt, neque porro quisquam est</p>
                    </div>
                </div>
            </div>
        </div>
    )
}