import React from "react";
import {Navcontainer, NavWrapper, NavRow, NavColumn, NavLinks} from "./styles/Nav-styles";


export default function Nav ({children,...restprops}){
    return <Navcontainer {...restprops}>{children}</Navcontainer>
}

Nav.NavWrapper = function NavWrapper({children,...restprops}){
    return <NavWrapper {...restprops}>{children}</NavWrapper>
}

Nav.NavRow = function NavRow({children,...restprops}){
    return <NavRow {...restprops}>{children}</NavRow>
}

Nav.NavColumn = function NavColumn({children,...restprops}){
    return <NavColumn {...restprops}>{children}</NavColumn>
}

Nav.NavLinks = function NavLinks({children,...restprops}){
    return <NavLinks {...restprops}>{children}</NavLinks>
}
