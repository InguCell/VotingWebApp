import React from "react";
import Nav from "../Nav-index";
import { NavColumn, NavLinks, NavRow, NavWrapper } from "./Nav-styles";
import "../css/styles.css"

export default function NavBar(){
    return(
        <Nav>
            <NavWrapper>
                <NavRow>
                    <NavColumn>
                        <NavLinks id="logo">Logo</NavLinks>
                    </NavColumn>
                    <NavColumn id="second">
                        <NavLinks >Home</NavLinks>
                        <NavLinks>About</NavLinks>
                        <NavLinks>FAQ</NavLinks>
                        <NavLinks>Contact</NavLinks>
                    </NavColumn>
                    <NavColumn id="third">
                        <NavLinks>Login</NavLinks>
                        <button id="button">Register as a voter</button>
                    </NavColumn>
                </NavRow>
            </NavWrapper>
        </Nav>
    )
}
