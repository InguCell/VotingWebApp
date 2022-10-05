import React, {useState,useEffect} from "react"
import "./rectProgress.css"
export function Votebars(){
    const [filled, setFilled]= useState(0);
    useEffect(()=>{
        if(filled<100){
            setTimeout(() => setFilled(prev=> prev+=2),350 )
        }
        
    })
    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height:`${filled}%`,
                    width:"50px",
                    backgroundColor:"rgb(255,96,96)",
                    transition: "height 0.5s"
                }}><span>{filled}</span></div>
                

            </div>
        </div>
    )
}

export function Votebars2(){
    const [filled, setFilled]= useState(0);
    useEffect(()=>{
        if(filled<80){
            setTimeout(() => setFilled(prev=> prev+=2), 50 )
        }
        
    })
    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height:`${filled}%`,
                    width:"50px",
                    backgroundColor:"rgb(255,180,16)",
                    transition: "height 0.5s"
                }}><span>{filled}</span></div>
                

            </div>
        </div>
    )
}
export function Votebar3(){
    const [filled, setFilled]= useState(0);
    useEffect(()=>{
        if(filled<60){
            setTimeout(() => setFilled(prev=> prev+=2), 350 )
        }
        
    })
    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height:`${filled}%`,
                    width:"50px",
                    backgroundColor:"rgb(45,117,202)",
                    transition: "height 0.5s"
                }}><span>{filled}</span></div>
                

            </div>
        </div>
    )
}

export function Votebars4(){
    const [filled, setFilled]= useState(0);
    useEffect(()=>{
        if(filled<40){
            setTimeout(() => setFilled(prev=> prev+=2), 350 )
        }
        
    })
    return(
        <div>
            <div className="progressbar">
                <div style={{
                    height:`${filled}%`,
                    width:"50px",
                    backgroundColor:"rgb(34,102,75)",
                    transition: "height 0.5s"
                }}><span>{filled}</span></div>
                

            </div>
        </div>
    )
}