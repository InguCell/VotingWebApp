import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";


export  function Part4_progress1(){
    return(
       <ProgressBar
            completed={100}
            borderRadius="0px"
            bgColor="rgb(220,77,77)"
            // width="70px"
            height="300px"
            customLabel="40%"
            labelAlignment="center"
            />
    )
}

export  function Part4_progress2(){
    return(
       <ProgressBar
            completed={100}
            borderRadius="0px"
            bgColor="rgb(220,136,21)"
            // width="70px"
            height="250px"
            customLabel="30%"
            labelAlignment="center"
            />
    )
}

export  function Part4_progress3(){
    return(
       <ProgressBar
            completed={100}
            borderRadius="0px"
            bgColor="rgb(53,79,146)"
            // width="70px"
            height="200px"
            customLabel="15%"
            labelAlignment="center"
            />
    )
}

export  function Part4_progress4(){
    return(
       <ProgressBar
            completed={100}
            borderRadius="0px"
            bgColor="rgb(58,86,65)"
            // width="70px"
            height="150px"
            customLabel="5%"
            labelAlignment="center"
            />
    )
}

