import styled from "styled-components";

export const Container =styled.div`
   background-color: red;
   padding: 80px 60px;

`

export const Wrapper =styled.div`
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 auto;
   background-color: #F2F2F2;
   //background-color: #f27979;
   padding: 40px 30px ;
`

export const Row =styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
   grid-column-gap: 50px;

   @media(max-width:1000px) {
      grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
      grid-row-gap: 60px;
   }
`

export const Column =styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
`

export const Title =styled.div`
   font-size: 24px;
   color: currentColor;
   margin-bottom: 10px;
   font-weight: bold;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export const Link =styled.div`
   color: currentColor;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   font-size: 15px;
   margin-bottom: 15px;
   text-decoration: none;
   transition: all 0.3s ease-in;

   &:hover{
      padding-left: 10px;
      transition: all 0.3s ease-in;
      cursor: pointer;
   }
`




