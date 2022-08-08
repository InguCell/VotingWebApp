import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import ChangingProgressProvider from "./ChangingProgessProvider"

export default function progressbar1() {

  const points = [60, 0, 10, 20, 60, 60 , 60 , 60 , 60 ]
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
        pathColor: "#FF6060",
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




