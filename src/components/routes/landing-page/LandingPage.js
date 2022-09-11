import React, {lazy, Suspense} from 'react'
import "./Part1.css"
import Part1 from './Part1'
import Part2 from './Part2'
import Part3 from './Part3'
import Part4 from './Part4'
import Part5 from './Part5'
import Loading from './Loading'

const P2 = lazy(()=>import('./Part2'));
const P3 = lazy(()=>import('./Part3'));
const P4 = lazy(()=>import('./Part4'));
const P5 = lazy(()=>import('./Part5'));




export default function Landingpage() {


  return (
    <div> 
      <Part1 />

      <Suspense>
         <Part2 />
         <Part3 />
         <Part4 />
         <Part5 />


      </Suspense>
         
    </div>
  )
}
