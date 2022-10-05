import React ,{useState}from "react";
import "./sidebar.css";
import { Search, Logout } from "@mui/icons-material";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Bell from "../dashboardHeader/notificationbell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import sidebarlogo from "./images/central-logo.png";
import { SidebarData } from "./sidebarData";
import avatar from "../pages/dashboard/noAvatar.jpg"

export default function Sidebar({children}){
    const [isOpen, setIsopen]=useState(false);
    const toggle=()=> setIsopen(!isOpen);
    return(
        <div className="main-wrapper">

            <div class="main-header">
                <div class="search-div">
                    <input type="text" placeholder="Search" id="not-search"/>
                    <button><Search/></button>
                </div>

                <div class="notificion-div">
                    <div><Bell/></div>
                    <div><img style={{width:"45px", height:"45px", borderRadius:"50%"}} src={avatar}/></div>
                    <p>Davida</p>
                </div>
            </div>

            
            <div className="side-container">
                <div className="sidebar" id={isOpen?"side-collapse":""}>
                    <div className="side-top-section">
                        <img className="side-logo" src={sidebarlogo} alt="Logo" id={isOpen?"logo-collapse":""}/>
                        <div className="side-bars" id={isOpen?"toggle-collapse":""}>
                            <FontAwesomeIcon className="side-fabars" icon={faBars}
                            onClick={toggle}
                            />
                        </div>
                    </div>

                    <div className="side-link-container">
                        {SidebarData.map((item, value)=>(
                            <Link to={item.path} key={value}  className="side-links" id={isOpen?"active":""}>
                                <div className="side-icons" id={isOpen?"icon-collapse":""}>{item.icons}</div>
                                <div className="side-texts" id={isOpen?"text-collapse":""}><p>{item.title}</p></div>
                            </Link>
                        ))}
                    </div>
                        
                    <Link to="#" className="side-links" id={isOpen?"active":""}>
                        <div className="side-icons" id={isOpen?"icon-collapse":""}><Logout/></div>
                        <div className="side-texts" id={isOpen?"text-collapse":""}>Logout</div>
                    </Link>
                    

                </div>

            </div>
            
            

             <Container fluid className="main-content">
                {children}
             </Container>
        
        
        </div>
        
    )
}