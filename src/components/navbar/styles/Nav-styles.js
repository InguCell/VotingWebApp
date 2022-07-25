import styled from "styled-components";

export const Navcontainer =styled.div`
   padding: 20px;
   //background-color: #f27979;
   background-color: #F2F2F2;
   padding: 15px;

`

export const NavWrapper =styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 auto;
`

export const NavRow =styled.div`
   display: flexbox;
   justify-content: space-between;
   flex-direction: row;
   padding: 20px;
   
`

export const NavColumn=styled.div`
   display: flexbox;
   flex-direction: row;
   text-align: center;
   width:auto;
   justify-content: space-between;

   
`
export const NavLinks=styled.div`
   font-size: 18px;
   margin-left: 30px;
   transition: all 0.3s;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

   &:hover{
    cursor: pointer;
    border-bottom: 2px solid black;
   }
`