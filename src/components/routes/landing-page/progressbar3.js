import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import ChangingProgressProvider from "./ChangingProgessProvider"

export default function progressbar3() {

  const points = [0,  20 , 5 , 39, 40, 60, 40, 30, 10]
  return (
  <ChangingProgressProvider values={points}>
  {value => (
    <CircularProgressbar
      value={value}
      text={`${value}%`}
      circleRatio={0.75}
      strokeWidth= {14}
      styles={buildStyles({
        rotation: 1/2 + 1 / 8,
        pathColor: "#1062C2",
        strokeLinecap: "butt",
        trailColor: "gray",
        textColor:"black",
        textSize:"1rem",
      })}
    />
  )}
</ChangingProgressProvider>
  )
}




