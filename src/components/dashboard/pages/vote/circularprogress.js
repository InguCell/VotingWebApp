import React from 'react'
import {CircularProgressbar, buildStyles} from "react-circular-progressbar"
import ChangingProgressProvider from "./changing"


export function Progressbar1() {

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
                pathColor: "rgb(255,96,96)",
                strokeLinecap: "butt",
                trailColor: "rgb(54,67,78)",
                textColor:"black",
                textSize:"1rem",
            })}
            />
        )}
        </ChangingProgressProvider>
  )
}


export function Progressbar2() {

    const points = [40, 45, 10, 20, 47, 73 , 69 , 60 , 50]
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
                  pathColor: "rgb(255,180,16)",
                  strokeLinecap: "butt",
                  trailColor: "rgb(54,67,78)",
                  textColor:"black",
                  textSize:"1rem",
              })}
              />
          )}
          </ChangingProgressProvider>
    )
  }


  export function Progressbar3() {

    const points = [20, 60, 50, 20, 47, 73 , 69 , 60 , 50 ]
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
                  pathColor: "rgb(16,98,194)",
                  strokeLinecap: "butt",
                  trailColor: "rgb(54,67,78)",
                  textColor:"black",
                  textSize:"1rem",
              })}
              />
          )}
          </ChangingProgressProvider>
    )
  }