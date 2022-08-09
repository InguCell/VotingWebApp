import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import ChangingProgressProvider from "./ChangingProgessProvider"

export default function Progressbar2() {

  const points = [0, 2  ,10, 10, 25,  40, 40, 50, 90 ]
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
        pathColor: "#FFB410",
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




