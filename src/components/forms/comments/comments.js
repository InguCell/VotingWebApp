import React from "react";
import { useState } from "react";
import "./com-styles/comments.css"

export default function Comments(){
    const [user,setUser]= useState({username:"",email:"",department:"",comments:""})

    const userChange =(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onsubmit=(e)=>{
        e.preventDefault();
        alert(`Hello ${user.username}`)
    }
    return(
        <form onSubmit={onsubmit}>
            <div>
                <label for="name">Name</label>
                <input id="name"
                value={user.username}
                name="username"
                onChange={userChange}
                />
            </div>

            <div>
                <label for="mail">Enter your student e-mail</label>
                <input id="mail"
                value={user.email}
                name="email"
                onChange={userChange}
                />
            </div>

            <div>
                <label for="depart">Deparment</label>
                <input id="depart"
                value={user.department}
                name="department"
                onChange={userChange}
                />
            </div>

            <div id="com">
                <label for="text">Comments</label>
                <textarea id="text"
                value={user.comments}
                name="comments"
                onChange={userChange}
                />
            </div>

            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    )
}