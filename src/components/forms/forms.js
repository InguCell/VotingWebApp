import React from "react";
import { useState } from "react";
import "./forms-styles/forms.css"

const Forms=()=>{
    const[user, setUser]= useState({id:"", email:"", Department:"", password:"", repass:""});

    const onChangeuser=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})

    }

    const submitform=(e)=>{
        e.preventDefault();
        alert('Hello')
    }
    
    return(
        <form onSubmit={submitform}>
            <div>
            <input
            type="text"
            placeholder="Enter your id number"
            value={user.id}
            name="id"
            onChange={onChangeuser}
            />
            </div>
            
            <div>
            <input
            type="e-mail"
            placeholder="Enter your student e-mail"
            value={user.email}
            name="email"
            onChange={onChangeuser}
            />
            </div>
            
           
            <div>
            <input
            type="text"
            placeholder="Deparment"
            value={user.Department}
            name="Department"
            onChange={onChangeuser}
            />
            </div>
            
            <div>
            <input
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={onChangeuser}
            />
            </div>
            
            <div>
            <input id="repas"
            type="password"
            placeholder="Re-Password"
            value={user.repass}
            name="repass"
            onChange={onChangeuser}
            />
            </div>
            <div className="links">
                <p className="click">By clicking the sign-up button</p>
                <p className="terms">Terms and Conditions</p>
            </div>
            <div id="sign-in">
                <button type="submit">Sign up</button>
            </div>
            
            
            
        </form>

    )

}

export default Forms;